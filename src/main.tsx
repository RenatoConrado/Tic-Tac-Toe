import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const div = document.getElementById('root') as HTMLDivElement;
const root = createRoot(div);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
