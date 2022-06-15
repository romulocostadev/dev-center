import { Routes, Route } from 'react-router-dom'
import RouteLogin from '../layouts/RouteLogin';
import Login from '../../src/pages/Login';
import CreateAccount from '../../src/pages/CreateAccount';
import RecoveryPassword from '../../src/pages/RecoveryPassword';
import Home from '../layouts/Home';
import HomeContent from '../../src/pages/HomeContent';
import Application from '../layouts/Application';
import ApplicationContent from '../../src/pages/ApplicationContent';
import CanvasLayout from '../layouts/CanvasLayout';
import DataCanvas from '../../src/pages/DataCanvas';
import DataCanvasDatabase from '../../src/pages/DataCanvasDatabase';
import ApplicationUpdated from '../layouts/ApplicationUpdated';
const IndexRoutes = () => (
<Routes>
<Route  path='' element={<RouteLogin/>} />
<Route  path='/route-login' element={<RouteLogin/>} >
<Route index  element={<Login/>} />
<Route  path='login' element={<Login/>} />
<Route  path='create-account' element={<CreateAccount/>} />
</Route>
<Route  path='recovery-password' element={<RecoveryPassword/>} />
<Route  path='/home' element={<Home/>} >
<Route index  element={<HomeContent/>} />
<Route  path='home-content' element={<HomeContent/>} />
</Route>
<Route  path='/application' element={<Application/>} >
<Route index  element={<ApplicationContent/>} />
<Route  path='application-content' element={<ApplicationContent/>} />
</Route>
<Route  path='/canvas-layout' element={<CanvasLayout/>} >
<Route index  element={<DataCanvas/>} />
<Route  path='data-canvas' element={<DataCanvas/>} />
<Route  path='data-canvas-database' element={<DataCanvasDatabase/>} />
</Route>
<Route  path='application-updated' element={<ApplicationUpdated/>} />
</Routes>
);
export default IndexRoutes;
