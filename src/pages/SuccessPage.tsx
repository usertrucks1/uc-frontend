import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { GetBookingStatus, GetSlotStatus } from '../services/utilityService';

export default function SlotBookingSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookedSlot = location.state?.bookedSlot;

  useEffect(() => {
    if (!bookedSlot) navigate('/slots');
    localStorage.setItem("phone_number",bookedSlot.user.phone_number)
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
          <p><strong>Status:</strong> {GetBookingStatus(status)}</p>
          <p><strong>Booking Time:</strong> {booking_time}</p>
        </div>

        <hr />

        <div className="text-gray-700 dark:text-gray-300">
          <p><strong>User:</strong> {user.first_name} {user.last_name}</p>
          <p><strong>Phone:</strong> {user.phone_number}</p>
        </div>

        <hr />

        <div className="text-gray-700 dark:text-gray-300">
          <p><strong>Slot Timing:</strong> {start_time} - {end_time}</p>
          <p><strong>Slot Status:</strong> {GetSlotStatus(slotStatus)}</p>
          {slot_hold_time && <p><strong>Slot Held At:</strong> {slot_hold_time}</p>}
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
          onClick={() => navigate('/bookings')}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Go to Bookings
        </button>
      </div>
    </div>
  );
}
