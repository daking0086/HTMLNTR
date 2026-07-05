import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import CharacterLayerTest from './pages/test/CharacterLayerTest';
import './index.css';

const isCharacterLayerTest = window.location.pathname === '/test/character-layer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isCharacterLayerTest ? <CharacterLayerTest /> : <App />}
  </StrictMode>,
);