import type { FC } from 'react';

interface Props {
  name: string;
  onClick: () => void;
}

const CategoryCard: FC<Props> = ({ name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white text-center text-lg font-medium"
    >
      {name}
    </div>
  );
};

export default CategoryCard;
