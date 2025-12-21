import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Form from './pages/form';
import Wines from './pages/wines';
import WineById from './pages/wineById';
import './global.css';
import Login from './pages/login';
import Register from './pages/register';
import ProtectedRoute from './protectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/form" element={<Form />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/wines/:id" element={<WineById />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
