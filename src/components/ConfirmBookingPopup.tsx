import React, { useState } from 'react';

interface Props {
  onClose: () => void;
  onConfirm: (data: { first_name: string; last_name: string; phone_number: string }) => void;
}

const ConfirmBookingPopup: React.FC<Props> = ({ onClose, onConfirm }) => {
  const [form, setForm] = useState({ first_name: '', last_name: '', phone_number: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { first_name, last_name, phone_number } = form;
    if (!first_name || !last_name || !phone_number) {
      return 'All fields are required.';
    }
    if (!/^[6-9]\d{9}$/.test(phone_number)) {
      return 'Invalid Indian phone number.';
    }
    return '';
  };

  const handleSubmit = () => {
    const errorMsg = validate();
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    setError('');
    onConfirm(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4 text-left">Enter Your Details</h3>
        <div className="space-y-3">
          <input
            name="first_name"
            placeholder="First Name"
            className="w-full border px-3 py-2 rounded"
            value={form.first_name}
            onChange={handleChange}
          />
          <input
            name="last_name"
            placeholder="Last Name"
            className="w-full border px-3 py-2 rounded"
            value={form.last_name}
            onChange={handleChange}
          />
          <input
            name="phone_number"
            placeholder="Phone Number"
            className="w-full border px-3 py-2 rounded"
            value={form.phone_number}
            onChange={handleChange}
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>
        <div className="flex justify-between mt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBookingPopup;
