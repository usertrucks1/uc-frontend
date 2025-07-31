import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProvidersPage from './pages/ProviderPage';
import SlotsPage from './pages/SlotsPage';
import ReviewPage from './pages/ReviewPage';
import SuccessPage from './pages/SuccessPage';
import BookingPage from './pages/BookingPage';

const App = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md flex items-center p-4">
        <img src="/logo.png" alt="App Icon" className="h-8 w-8 mr-2" />
        <h1 className="text-lg font-semibold">Urban</h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/providers/:categoryId" element={<ProvidersPage />} />
        <Route path="/slots/:providerId" element={<SlotsPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/slots/success" element={<SuccessPage />} />
        <Route path="/bookings" element={<BookingPage />} />
      </Routes>
    </>

  );
};

export default App;
