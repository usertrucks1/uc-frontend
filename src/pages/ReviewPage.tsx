import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { SlotPreview } from '../types';
import { to12Hour } from '../services/utilityService';
import { bookSlot, holdSlot } from '../services/apiService';

const ReviewPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slotDetails } = location.state as { slotDetails: SlotPreview };

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ first_name: '', last_name: '', phone_number: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!slotDetails) {
    return <p className="text-center mt-10">Invalid slot data.</p>;
  }

  const provider = slotDetails.provider;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    return (
      form.first_name.trim() &&
      form.last_name.trim() &&
      /^(\+91)?[6-9]\d{9}$/.test(form.phone_number.trim())
    );
  };

      const handleBookSlot = async (slot_id: number, is_hold: boolean) => {
          try {
              setLoading(true);
              const heldSlot = await holdSlot(slot_id, is_hold);
              console.log(heldSlot,"slothelod")
  
              navigate('/', {
                  state: {
                  },
              });
          } catch (err: any) {
              setError('Slot is no longer available');
          } finally {
              setLoading(false);
          }
      };

  const handleConfirmBooking = async () => {
    if (!validateForm()) {
      setError('All fields are required and phone number must be valid.');
      return;
    }

    setLoading(true);
    setError('');

    const payload = {
      ...form,
      phone_number: Number(form.phone_number),
    };

    try {
      const bookedSlot = await bookSlot(slotDetails.id, payload);
      navigate('/slots/success', { state: { bookedSlot } });
    } catch (err) {
      console.error(err);
      setError('Unable to confirm your booking, please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Review Your Booking</h1>

      <div className="bg-white rounded shadow p-6 space-y-4">
        <p><strong>Category:</strong> {provider.category.name}</p>
        <p><strong>Provider:</strong> {provider.first_name} {provider.last_name}</p>
        <p><strong>Email:</strong> {provider.email}</p>
        <p><strong>Phone:</strong> {provider.phone_number}</p>
        <p><strong>Slot Start:</strong> {to12Hour(slotDetails.start_time)}</p>
        <p><strong>Slot End:</strong> {to12Hour(slotDetails.end_time)}</p>
        <p><strong>Slot Duration:</strong> {provider.slot_duration_mins} mins</p>
        <p><strong>Charges:</strong> ₹{provider.charges_per_slot_rupee}</p>
      </div>

      {error && <p className="text-red-600 text-center mt-4">{error}</p>}

      <div className="text-center mt-6">
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          onClick={() => handleBookSlot(slotDetails.id, false)}
        >
          Cancel
        </button>
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          onClick={() => setShowModal(true)}
        >
          Confirm
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-lg p-6 w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4">Enter your details</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={form.first_name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={form.last_name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                value={form.phone_number}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex justify-end space-x-3 mt-4">
                <button
                  className="px-4 py-2 rounded border"
                  onClick={() => setShowModal(false)}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  onClick={handleConfirmBooking}
                  disabled={loading}
                >
                  {loading ? 'Booking...' : 'Confirm Booking'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ReviewPage;
