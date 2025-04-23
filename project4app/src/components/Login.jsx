import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ user_name: '', user_password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      if (response.data.success) {
        alert(response.data.message);
        localStorage.setItem('username', formData.user_name);
        console.log('Navigating to dashboard...');
        navigate('/dashboard');
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <main className="home">
      <h1>Join the Discussion</h1>
      <p>
        Whether you have a question, or you come with the answers. Join the community, everybody has something to share.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User Name"
          required
          onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setFormData({ ...formData, user_password: e.target.value })}
        />
        <button type="submit">Log In</button>
      </form>
      <br/>
      <p>
        Don't have an account?{' '}
        <Link className="buttonLink" to="/register">
          SIGN Up
        </Link>
      </p>
    </main>
  );
}