import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import DiscussionPage from './pages/DiscussionPage.jsx';
import './AppGlobal.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/discussion/:category" element={<DiscussionPage />} />
      </Routes>
    </div>
  );
}

export default App;