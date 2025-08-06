import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Upload from './pages/Upload';
import SearchResults from './pages/SearchResults';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto px-4 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
