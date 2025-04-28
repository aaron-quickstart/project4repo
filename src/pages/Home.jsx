import { useState } from 'react';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';

function Home() {
  const [showLogin, setShowLogin] = useState(true);

  return showLogin ? <Login /> : <Register />;
}

export default Home;