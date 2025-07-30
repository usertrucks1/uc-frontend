import type { Category } from '../types';
import CategoryCard from './CategoryCard';
import { useNavigate } from 'react-router-dom';

interface ServiceCategoriesProps {
  categories: Category[];
}

const ServiceCategories = ({ categories }: ServiceCategoriesProps) => {
  const navigate = useNavigate();

  return (
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
  );
};

export default ServiceCategories;
