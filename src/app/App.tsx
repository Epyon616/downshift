import { Route, Routes } from 'react-router-dom';
import {HomePage} from '../pages';
// import AssetServicePage from '../pages/work/AssetServicePage';
// import GuestFlowPage from '../pages/work/GuestFlowPage';
// import HealthinotePage from '../pages/work/HealthinotePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/work/healthinote" element={<HealthinotePage />} />
      <Route path="/work/asset-service" element={<AssetServicePage />} />
      <Route path="/work/guestflow" element={<GuestFlowPage />} /> */}
    </Routes>
  );
};

export default App;