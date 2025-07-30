import { useQuery } from '@tanstack/react-query';
import SlotCard from '@/components/SlotCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAvailableSlots } from '@/services/api';

export default function SlotBookingPage() {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState<any>(null);

  const { data, isLoading } = useQuery(['slots'], getAvailableSlots);

  if (isLoading) return <p className="text-center">Loading slots...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">Book a Slot</h1>

      {data.providers.map((provider: any) => (
        <div key={provider.id} className="mb-6">
          <h2 className="text-lg font-semibold mb-2">{provider.name}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {provider.slots.map((slot: any) => (
              <SlotCard
                key={slot.id}
                time={slot.time}
                price={slot.price}
                available={slot.available}
                selected={selectedSlot?.id === slot.id}
                onSelect={() => setSelectedSlot(slot)}
              />
            ))}
          </div>
        </div>
      ))}

      <button
        disabled={!selectedSlot}
        onClick={() => navigate('/review', { state: selectedSlot })}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg disabled:bg-gray-400"
      >
        Continue
      </button>
    </div>
  );
}
