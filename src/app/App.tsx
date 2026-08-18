import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ConfigContext } from '../Components/Contexts';
import { SkipLink } from '../Components';
import {HomePage, HealthinotePage, AssetServicePage, GuestFlowPage } from '../pages';

const App = () => {
  const { configs: { content: { skipLinkLabel } } } = useContext(ConfigContext);
  return (
    <>
      <SkipLink label={skipLinkLabel} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/healthinote" element={<HealthinotePage />} />
        <Route path="/work/asset-service" element={<AssetServicePage />} />
        <Route path="/work/guestflow" element={<GuestFlowPage />} />
      </Routes>
    </>
  );
};

export default App;
