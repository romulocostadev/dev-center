import { Routes, Route } from 'react-router-dom'
import DataCanvas from '../../src/pages/DataCanvas';
import DataCanvasDatabase from '../../src/pages/DataCanvasDatabase';
const IndexRoutes = () => (
<Routes>
<Route  path='' element={<DataCanvas/>} />
<Route  path='data-canvas' element={<DataCanvas/>} />
<Route  path='data-canvas-database' element={<DataCanvasDatabase/>} />
</Routes>
);
export default IndexRoutes;
