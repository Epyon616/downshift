import { Route, Routes } from 'react-router-dom';
import {HomePage, HealthinotePage, AssetServicePage, GuestFlowPage } from '../pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/healthinote" element={<HealthinotePage />} />
      <Route path="/work/asset-service" element={<AssetServicePage />} />
      <Route path="/work/guestflow" element={<GuestFlowPage />} />
    </Routes>
  );
};

export default App;