import { useEffect, useState } from 'react';
import { fetchCategories } from '../services/apiService';
import type { Category } from '../types';
import Footer from '../components/Footer';
import Feedback from '../components/Feedback';
import Loader from '../components/Loader';
import Popup from '../components/Popup';
import HomeHero from '../components/HomeHero';
import ServiceCategories from '../components/ServiceCategories';

const HomePage = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) return <Loader message="Loading services..." />;

  if (error) return <Popup header={"Error"} message={error || "something went wrong"} cta={"Ok"} onClose={() => setError(null)}/>;

  return (
    <div>
      <HomeHero/>
      <ServiceCategories categories={categories || []} />
      <Feedback />
      <Footer />
    </div>

  );
};

export default HomePage;
