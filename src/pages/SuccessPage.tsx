import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SlotBookingSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookedSlot = location.state?.bookedSlot;

  useEffect(() => {
    if (!bookedSlot) navigate('/slots'); // redirect if no data
  }, [bookedSlot, navigate]);

  if (!bookedSlot) return null;

  const {
    id,
    booking_time,
    status,
    user,
    slots,
  } = bookedSlot;

  const {
    start_time,
    end_time,
    status: slotStatus,
    slot_hold_time,
    provider,
  } = slots;

  const {
    first_name: providerFirstName,
    last_name: providerLastName,
    phone_number: providerPhone,
    charges_per_slot_rupee,
    category,
  } = provider;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow-sm bg-white dark:bg-zinc-900 dark:text-white">
      <h1 className="text-3xl font-bold text-green-600 mb-6">🎉 Booking Confirmed!</h1>

      <div className="space-y-4 text-sm">
        <div className="text-gray-700 dark:text-gray-300">
          <p><strong>Booking ID:</strong> #{id}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Booking Time:</strong> {new Date(booking_time).toLocaleString()}</p>
        </div>

        <hr />

        <div className="text-gray-700 dark:text-gray-300">
          <p><strong>User:</strong> {user.first_name} {user.last_name}</p>
          <p><strong>Phone:</strong> {user.phone_number}</p>
        </div>

        <hr />

        <div className="text-gray-700 dark:text-gray-300">
          <p><strong>Slot Timing:</strong> {new Date(start_time).toLocaleTimeString()} - {new Date(end_time).toLocaleTimeString()}</p>
          <p><strong>Slot Status:</strong> {slotStatus}</p>
          {slot_hold_time && <p><strong>Slot Held At:</strong> {new Date(slot_hold_time).toLocaleString()}</p>}
        </div>

        <hr />

        <div className="text-gray-700 dark:text-gray-300">
          <p><strong>Provider:</strong> {providerFirstName} {providerLastName}</p>
          <p><strong>Category:</strong> {category.name}</p>
          <p><strong>Contact:</strong> {providerPhone}</p>
          <p><strong>Charge per Slot:</strong> ₹{charges_per_slot_rupee}</p>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
