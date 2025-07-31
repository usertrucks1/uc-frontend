import React from 'react';
import type { Slot } from '../types';
import { to12Hour } from '../services/utilityService';

interface SlotCardProps {
  slot: Slot;
  onBook: (slot: Slot, is_hold: boolean) => void;
}

const SlotCard: React.FC<SlotCardProps> = ({ slot, onBook }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow transition-shadow duration-200 text-sm">
      <p className="font-medium text-indigo-800">
        {to12Hour(slot.start_time.slice(11, 16))} - {to12Hour(slot.end_time.slice(11, 16))}
      </p>
      <p className="text-gray-700 mt-1">
        ₹{slot.charges_per_slot_rupee ?? 0}
      </p>
      <button
        onClick={() => onBook(slot, true)}
        className="mt-3 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm transition duration-200"
      >
        Book
      </button>
    </div>
  );
};

export default SlotCard;
