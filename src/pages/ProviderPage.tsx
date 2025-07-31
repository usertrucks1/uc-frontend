import React, { useEffect, useState } from 'react';
import { fetchProviders } from '../services/apiService';
import type { Provider } from '../types';
import Loader from '../components/Loader';
import ProviderCard from '../components/ProviderCard';
import { useParams } from 'react-router-dom';

const ProvidersPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getProviders = async (categoryId: number) => {
    try {
      setLoading(true);
      const data = await fetchProviders(categoryId);
      setProviders(data);
    } catch (error) {
      console.error('Error fetching providers:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!categoryId) return;
    getProviders(Number(categoryId));
  }, [categoryId]);

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-semibold text-center mb-8">Available Providers</h1>

      {loading ? (
        <Loader message="Loading service providers..." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>

      )}
    </div>
  );
};

export default ProvidersPage;
