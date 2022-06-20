import { Routes, Route } from 'react-router-dom'
import Autorization from '../layouts/Autorization';
import Login from '../../src/pages/Login';
import CreateAccount from '../../src/pages/CreateAccount';
import RecoveryPassword from '../../src/pages/RecoveryPassword';
import Solution from '../layouts/Solution';
import List from '../../src/pages/List';
import Application from '../layouts/Application';
import Home from '../../src/pages/Home';
import CanvasLayout from '../layouts/CanvasLayout';
import DataCanvas from '../../src/pages/DataCanvas';
import DataCanvasDatabase from '../../src/pages/DataCanvasDatabase';
import ApplicationUpdated from '../layouts/ApplicationUpdated';
const IndexRoutes = () => (
<Routes>
<Route  path='' element={<Autorization/>} />
<Route  path='/autorization' element={<Autorization/>} >
<Route index  element={<Login/>} />
<Route  path='login' element={<Login/>} />
<Route  path='create-account' element={<CreateAccount/>} />
</Route>
<Route  path='recovery-password' element={<RecoveryPassword/>} />
<Route  path='/solution' element={<Solution/>} >
<Route index  element={<List/>} />
<Route  path='list' element={<List/>} />
</Route>
<Route  path='/application' element={<Application/>} >
<Route index  element={<Home/>} />
<Route  path='home' element={<Home/>} />
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
