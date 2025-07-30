type Props = {
  name: string;
  onClick: () => void;
};

const CategoryCard = ({ name, onClick }: Props) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer p-6 text-center"
      onClick={onClick}
    >
      <div className="text-xl font-semibold text-gray-800">{name}</div>
    </div>
  );
};

export default CategoryCard;
