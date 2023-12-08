import './App.css';
import Home from './components/Home';
import Questions from './components/Questions';
import { Routes, Route } from "react-router-dom"

/**
 * App Component
 * The main component that defines the application's routes and renders corresponding components.
 * @returns {JSX.Element} - React component for rendering the main application structure.
 */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/questions" element={<Questions />}/>
      </Routes>
        </div>
  );
}

export default App;
