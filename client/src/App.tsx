import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Applications from './pages/applications/Applications';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
