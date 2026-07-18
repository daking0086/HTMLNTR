import { StrictMode, type ComponentType } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ComponentLab from './pages/test/ComponentLab';
import CharacterLayerTest from './pages/test/CharacterLayerTest';
import SceneStageTest from './pages/test/SceneStageTest';
import LooperTest from './pages/test/LooperTest';
import { getAppPath } from './utils/appPath';
import './index.css';

/** Dev sandboxes — register new tests here + in ComponentLab.tsx */
const TEST_ROUTES: Record<string, ComponentType> = {
  '/test': ComponentLab,
  '/test/character-layer': CharacterLayerTest,
  '/test/scene-stage': SceneStageTest,
  '/test/looper': LooperTest,
};

const path = getAppPath();
const TestPage = TEST_ROUTES[path];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {TestPage ? <TestPage /> : <App />}
  </StrictMode>,
);
