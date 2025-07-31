import React from 'react';
import { useNavigate } from 'react-router-dom';
import { to12Hour } from '../services/utilityService';

interface ProviderCardProps {
  provider: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    charges_per_slot_rupee: number;
    slot_duration_mins: number;
    work_start_time: string;
    work_end_time: string;
  };
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-bold text-indigo-600 mb-2">
        {provider.first_name} {provider.last_name}
      </h3>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Email:</span> {provider.email}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Phone:</span> {provider.phone_number}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Charges:</span> ₹{provider.charges_per_slot_rupee} / {provider.slot_duration_mins} min
      </p>
      <p className="text-sm text-gray-600 mb-4">
        <span className="font-medium">Working Hours:</span> {to12Hour(provider.work_start_time)} - {to12Hour(provider.work_end_time)}
      </p>
      <button
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition duration-200"
        onClick={() => navigate(`/slots/${provider.id}`)}
      >
        Book Slot
      </button>
    </div>
  );
};

export default ProviderCard;
