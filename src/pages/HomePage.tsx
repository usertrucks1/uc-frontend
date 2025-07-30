import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../services/apiService';
import CategoryCard from '../components/CategoryCard';
import type { Category } from '../types';
import Footer from '../components/Footer';
import Feedback from '../components/Feedback';

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

  if (loading) return <p className="text-center mt-12 text-lg font-medium">Loading categories...</p>;
  if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

  return (
    <div>
    <section className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Home Services, Delivered
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Book trusted professionals for cleaning, repairs, grooming, and more – at your doorstep.
        </p>
        <a
          href="#services"
          className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition duration-1000 ease-in-out"
        >
          Explore Services
        </a>
      </div>
    </section>

    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Choose a Service Category
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categories?.map((cat) => (
              <CategoryCard
                key={cat.id}
                name={cat.name}
                onClick={() => navigate(`/providers/${cat.id}`)}
              />
            ))}
          </div>
        </div>
    </section>

    <Feedback/>
    <Footer/>
    </div>

  );
};

export default HomePage;
