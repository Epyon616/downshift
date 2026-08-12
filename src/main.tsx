import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './app/App.tsx'
import { ConfigsProvider } from './Components/Contexts';
import configData from './Conf/config.json';
import './app/App.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ConfigsProvider configJson={configData}>
        <App />
      </ConfigsProvider>
    </HashRouter>
  </StrictMode>,
);
