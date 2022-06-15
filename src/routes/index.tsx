import { Routes, Route } from 'react-router-dom';
import RouteLogin from '../layouts/RouteLogin';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import RecoveryPassword from '../pages/RecoveryPassword';
import Home from '../layouts/Home';
import HomeContent from '../pages/HomeContent';
import Application from '../layouts/Application';
import ApplicationContent from '../pages/ApplicationContent';
import CanvasLayout from '../layouts/CanvasLayout';
import DataCanvas from '../pages/DataCanvas';
import DataCanvasDatabase from '../pages/DataCanvasDatabase';
import ApplicationUpdated from '../layouts/ApplicationUpdated';

const IndexRoutes = () => (
  <Routes>
    <Route path="" element={<RouteLogin />} />
    <Route path="/route-login" element={<RouteLogin />}>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="create-account" element={<CreateAccount />} />
    </Route>
    <Route path="recovery-password" element={<RecoveryPassword />} />
    <Route path="/home" element={<Home />}>
      <Route index element={<HomeContent />} />
      <Route path="home-content" element={<HomeContent />} />
    </Route>
    <Route path="/application" element={<Application />}>
      <Route index element={<ApplicationContent />} />
      <Route path="application-content" element={<ApplicationContent />} />
    </Route>
    <Route path="/canvas-layout" element={<CanvasLayout />}>
      <Route index element={<DataCanvas />} />
      <Route path="data-canvas" element={<DataCanvas />} />
      <Route path="data-canvas-database" element={<DataCanvasDatabase />} />
    </Route>
    <Route path="application-updated" element={<ApplicationUpdated />} />
  </Routes>
);
export default IndexRoutes;
