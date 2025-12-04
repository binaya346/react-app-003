import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Form from './pages/form';
import Wines from './pages/wines';
import WineById from './pages/wineById';
import './global.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/wines" element={<Wines />} />
        <Route path="/wines/:id" element={<WineById />} />
      </Routes>
    </div>
  );
}

export default App;
