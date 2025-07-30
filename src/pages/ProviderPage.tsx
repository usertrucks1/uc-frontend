import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProviders } from '../services/apiService';
import type { Provider } from '../types';

const ProvidersPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

    const navigate = useNavigate();

  useEffect(() => {
    if (!categoryId) return;

    const getProviders = async () => {
      try {
        setLoading(true);
        const data = await fetchProviders(parseInt(categoryId));
        setProviders(data);
      } catch (error) {
        console.error('Error fetching providers:', error);
      } finally {
        setLoading(false);
      }
    };

    getProviders();
  }, [categoryId]);

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-semibold text-center mb-8">Available Providers</h1>
      {loading ? (
        <p className="text-center">Loading providers...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300"
            >
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
                <span className="font-medium">Working Hours:</span> {provider.work_start_time} - {provider.work_end_time}
              </p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition duration-200"
               onClick={() => navigate(`/slots/${provider.id}`)}>
                Book Slot
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProvidersPage;
