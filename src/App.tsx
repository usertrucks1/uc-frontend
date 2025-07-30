import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import other pages like ProviderListPage, BookingPage, etc.

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Example routes */}
      {/* <Route path="/category/:categoryId/providers" element={<ProviderListPage />} /> */}
      {/* <Route path="/book/:slotId" element={<BookingPage />} /> */}
    </Routes>
  );
};

export default App;
