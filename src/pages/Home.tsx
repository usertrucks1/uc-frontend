import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../api/apiService';

interface Category {
  id: string;
  name: string;
  image_url: string;
}

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.error('Failed to fetch categories', err));
  }, []);

  const handleCategoryClick = (id: string) => {
    navigate(`/providers/${id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Choose a Category</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
            onClick={() => handleCategoryClick(category.id)}
          >
            <img
              src={category.image_url || 'https://via.placeholder.com/100'}
              alt={category.name}
              className="w-20 h-20 object-cover rounded-full mb-2"
            />
            <p className="text-sm font-medium text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
