import { FC } from 'react';

type SlotCardProps = {
  time: string;
  price: number;
  available: boolean;
  onSelect: () => void;
  selected?: boolean;
};

const SlotCard: FC<SlotCardProps> = ({ time, price, available, onSelect, selected }) => {
  return (
    <div
      className={`p-4 rounded-2xl shadow-md flex flex-col items-center justify-between text-center border transition ${
        available
          ? selected
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-white border-gray-300 hover:bg-gray-100'
          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
      }`}
      onClick={available ? onSelect : undefined}
    >
      <div className="text-lg font-semibold">{time}</div>
      <div className="text-sm">₹{price}</div>
    </div>
  );
};

export default SlotCard;
