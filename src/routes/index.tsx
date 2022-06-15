import { Routes, Route } from 'react-router-dom';
import DataCanvas from '../pages/DataCanvas';
import DataCanvasDatabase from '../pages/DataCanvasDatabase';

const IndexRoutes = () => (
  <Routes>
    <Route path="" element={<DataCanvas />} />
    <Route path="data-canvas" element={<DataCanvas />} />
    <Route path="data-canvas-database" element={<DataCanvasDatabase />} />
  </Routes>
);
export default IndexRoutes;
