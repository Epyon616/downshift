import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ConfigsProvider } from './Components/Contexts';
import configData from './conf/config.json';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigsProvider configJson={configData}>
     <App />
    </ConfigsProvider>
  </StrictMode>,
)
