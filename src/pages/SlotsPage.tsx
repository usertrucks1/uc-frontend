import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSlots, holdSlot } from '../services/apiService';
import type { Slot } from '../types';
import SlotCard from '../components/SlotCard';
import Loader from '../components/Loader';
import Popup from '../components/Popup';

const SlotsPage: React.FC = () => {
    const { providerId } = useParams<{ providerId: string }>();
    const [selectedDate, setSelectedDate] = useState<string>(() => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    });
    const [slots, setSlots] = useState<Slot[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAvailableSlots = async () => {
        if (!providerId || !selectedDate) return;

        try {
            setLoading(true);
            const data = await fetchSlots(Number(providerId), selectedDate);
            console.log(data, "data")
            setSlots(data);
            console.log(slots,"lots")
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const navigate = useNavigate();

    const handleBookSlot = async (slot: Slot, is_hold: boolean) => {
        try {
            setLoading(true);
            const heldSlot = await holdSlot(slot.id, is_hold);
            console.log(heldSlot,"heldslot")

            navigate('/review', {
                state: {
                    slotDetails: heldSlot?.slot,
                },
            });
        } catch (err: any) {
            setError('Slot is no longer available');
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchAvailableSlots();
    }, [selectedDate, providerId]);

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Book a Slot</h1>

            <div className="mb-6 text-center">
                <label htmlFor="date" className="block mb-2 text-lg font-medium text-gray-700">
                    Select Date
                </label>
                <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
            </div>


            {loading && <Loader message="Loading slots..." />}

            {error && <Popup header={"Error"} message={error || "something went wrong"} cta={"Ok"} onClose={() => setError(null)} />}


            {!loading && !error && slots?.length === 0 && (
                <p className="text-center text-gray-600">No slots available for this date.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {slots?.map((slot) => (
                    <SlotCard
                        key={slot.id}
                        slot={slot}
                        onBook={handleBookSlot}
                    />
                ))}
            </div>
        </div>
    );
};

export default SlotsPage;
