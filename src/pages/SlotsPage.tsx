import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSlots } from '../services/apiService';
import type { Slot } from '../types';

const to12Hour = (time: string) => {
    const [hourStr, minute] = time.split(':');
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // Convert 0 → 12 for midnight
    return `${hour}:${minute} ${ampm}`;
};


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
            console.log(slots)
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
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
                    min={new Date().toISOString().split('T')[0]} // ⬅️ This line restricts past dates
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
            </div>


            {loading && <p className="text-center">Loading slots...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}

            {!loading && !error && slots?.length === 0 && (
                <p className="text-center text-gray-600">No slots available for this date.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {slots?.map((slot) => (
                    <div
                        key={slot.id}
                        className={`bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300`}
                    >
                        <p className="font-semibold text-indigo-800 text-lg">
                            {to12Hour(slot.start_time.slice(11, 16))} - {to12Hour(slot.end_time.slice(11, 16))}
                        </p>
                        <p className="text-gray-700 mt-1">
                            ₹{slot.charges_per_slot_rupee ?? 0}
                        </p>
                        <button
                            onClick={() => console.log('Hold or book slot ID:', slot.id)}
                            className="mt-4  px-5 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition duration-200"
                        >
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlotsPage;
