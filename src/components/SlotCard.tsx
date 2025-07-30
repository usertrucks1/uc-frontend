import React from 'react';
import type { Slot } from '../types';
import { to12Hour } from '../services/utilityService';

interface SlotCardProps {
  slot: Slot;
  onBook: (slot: Slot, is_hold: boolean) => void;
}

const SlotCard: React.FC<SlotCardProps> = ({ slot, onBook }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300"
    >
      <p className="font-semibold text-indigo-800 text-lg">
        {to12Hour(slot.start_time.slice(11, 16))} - {to12Hour(slot.end_time.slice(11, 16))}
      </p>
      <p className="text-gray-700 mt-1">
        ₹{slot.charges_per_slot_rupee ?? 0}
      </p>
      <button
        onClick={() => onBook(slot, true)}
        className="mt-4 px-5 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition duration-200"
      >
        Book Now
      </button>
    </div>
  );
};

export default SlotCard;
