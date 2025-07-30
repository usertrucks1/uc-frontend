import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/providers/:categoryId" element={<ProviderListPage />} />
        <Route path="/slots/:providerId" element={<SlotBookingPage />} />
        <Route path="/review" element={<ReviewBookingPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
