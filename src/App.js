import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Form from './pages/form';
import './global.css';
import Login from './pages/login';
import Register from './pages/register';
import ProtectedRoute from './protectedRoute';
import Author from './pages/author';
import Publisher from './pages/publisher';
import Genre from './pages/genre';
import Book from './pages/book';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/author" element={<Author />} />
          <Route path="/book" element={<Book />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/publisher" element={<Publisher />} />

        </Route>

      </Routes>
    </div>
  );
}

export default App;
