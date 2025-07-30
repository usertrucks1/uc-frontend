import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../services/apiService';
import CategoryCard from '../components/CategoryCard';

import type { Category } from '../types';

const HomePage = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading categories...</p>;
  if (error) return <p className="text-center mt-8 text-red-600">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Select a Service Category</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories?.map((cat) => (
          <CategoryCard
            key={cat.id}
            name={cat.name}
            onClick={() => navigate(`/category/${cat.id}/providers`)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
