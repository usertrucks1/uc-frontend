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
        console.log(data)
        setCategories(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) return <p className="text-center mt-12 text-lg font-medium">Loading categories...</p>;
  if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 text-center shadow-md">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to UrbanCare
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Book trusted professionals for your daily needs. Fast, reliable, and hassle-free.
          </p>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
            onClick={() => document.getElementById('category-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="category-section" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Choose a Service Category
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categories?.map((cat) => (
              <CategoryCard
                key={cat.id}
                name={cat.name}
                onClick={() => navigate(`/category/${cat.id}/providers`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
