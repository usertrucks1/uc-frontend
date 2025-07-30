import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProvidersPage from './pages/ProviderPage';
import SlotsPage from './pages/SlotsPage';
import ReviewPage from './pages/ReviewPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/providers/:categoryId" element={<ProvidersPage />} />
      <Route path="/slots/:providerId" element={<SlotsPage />} />
      <Route path="/review" element={<ReviewPage />} />
      {/* <Route path="/book/:slotId" element={<BookingPage />} /> */}
    </Routes>
  );
};

export default App;
