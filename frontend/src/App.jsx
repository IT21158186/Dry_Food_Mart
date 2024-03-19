import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../src/pages/Landing';
import Login from './pages/CusLogin';
import Signup from './pages/CusSignup';
import TopNav from './pages/common/TopNav';
import Home from './pages/Home';
import InventoryManagementDashboard from './pages/managers/InventoryManagementDashboard';

function App() {
  return (
    <BrowserRouter>
      <TopNav /> {/* Render TopNav outside the Routes */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory' element={<InventoryManagementDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
