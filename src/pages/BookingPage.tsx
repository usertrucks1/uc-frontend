import { useEffect, useState } from 'react';
import { fetchBookings, cancelBookingById } from '../services/apiService';
import type { Booking } from '../types';
import { GetBookingStatus } from '../services/utilityService';

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  useEffect(() => {
    fetchBookingData();
  }, []);

  async function fetchBookingData() {
    const phone_number = localStorage.getItem('phone_number');
    if (!phone_number) return;

    try {
      const res = await fetchBookings(Number(phone_number));
      setBookings(res);
    } catch (e) {
      console.error('Failed to fetch bookings:', e);
    }
  }

  async function handleCancelBooking(id: number) {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    try {
      setLoadingId(id);
      await cancelBookingById(id);
      fetchBookingData(); 
    } catch (err) {
      console.error("Cancellation failed:", err);
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div className="p-6 mx-32">
      <h1 className="text-2xl font-semibold mb-4">Your Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => {
            const startTime = new Date(booking.slot.start_time);
            const now = new Date();
            const isFutureBooking = startTime.getTime() > now.getTime();
            const isConfirmed = Number(booking.status) === 1;

            return (
              <div
                key={booking.id}
                className="border p-4 rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      isConfirmed ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {GetBookingStatus(Number(booking.status))}
                  </span>
                  <p><strong>Start Time:</strong> {startTime.toUTCString()}</p>
                  <p><strong>Provider:</strong> {booking.provider.name}</p>
                </div>

                {isConfirmed && isFutureBooking && (
                  <button
                    onClick={() => handleCancelBooking(booking.id)}
                    disabled={loadingId === booking.id}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                  >
                    {loadingId === booking.id ? 'Cancelling...' : 'Cancel'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
