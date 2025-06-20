import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import PokemonPage from './pages/PokemonPage';

function App() {
  return (
    <Router basename="/pokedemo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </Router>
  );
}

export default App;