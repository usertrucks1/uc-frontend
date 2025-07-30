import { useLocation, useNavigate } from 'react-router-dom';
import { bookSlot } from '@/services/api';

export default function ReviewPage() {
  const { state: slot } = useLocation();
  const navigate = useNavigate();

  const handleConfirm = async () => {
    await bookSlot(slot.id);
    alert('Booking confirmed!');
    navigate('/');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Review Your Booking</h2>

      <div className="p-4 rounded-lg border bg-white">
        <p><strong>Time:</strong> {slot.time}</p>
        <p><strong>Provider:</strong> {slot.providerName}</p>
        <p><strong>Price:</strong> ₹{slot.price}</p>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={handleConfirm}
          className="flex-1 bg-green-600 text-white py-2 rounded-lg"
        >
          Confirm
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
