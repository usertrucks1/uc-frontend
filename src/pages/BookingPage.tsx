import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchBookings } from '../services/apiService';
import type { Booking } from '../types';
import { GetBookingStatus } from '../services/utilityService';

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetchBookingData();
  }, []);

  async function fetchBookingData() {
    const phone_number = localStorage.getItem('phone_number');

    if (!phone_number) return;

    try {
      const res = await fetchBookings(Number(phone_number));
      console.log(res, "res")
      setBookings(res);
    } catch (e) {
      console.error('Failed to fetch bookings:', e);
    }
  }

  async function cancelBooking(id: number) {
    try {
      await axios.patch(`/api/bookings/${id}/cancel`);
      fetchBookingData();
    } catch (e) {
      alert('Cancellation failed.');
    }
  }

  const now = new Date();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Bookings</h1>

      {bookings?.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => {
            const startTime = new Date(booking.slot.start_time);

            return (
              <div
                key={booking?.id}
                className="border p-4 rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${Number(booking?.status) === 1 ? 'bg-green-500' : 'bg-red-500'
                      }`}
                  >
                    {GetBookingStatus(Number(booking?.status))}
                  </span>
                  <p><strong>Start Time:</strong> {startTime.toUTCString()}</p>
                  <p><strong>Provider:</strong> {booking.provider.name}</p>
                  
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
