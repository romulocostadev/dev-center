import { Routes, Route } from 'react-router-dom';
import Solution from '../layouts/Solution';
import List from '../pages/List';
import Application from '../layouts/Application';
import Home from '../pages/Home';
import CanvasLayout from '../layouts/CanvasLayout';
import DataCanvas from '../pages/DataCanvas';

const IndexRoutes = () => (
  <Routes>
    <Route path="/solutions" element={<Solution />}>
      <Route index element={<List />} />
    </Route>
    <Route path="/solution" element={<Application />}>
      <Route path=":id/home" element={<Home />} />
      <Route path=":id/data" element={<CanvasLayout />}>
        <Route index element={<DataCanvas />} />
      </Route>
    </Route>
  </Routes>
);
export default IndexRoutes;
