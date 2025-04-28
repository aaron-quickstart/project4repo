import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({ user_name: '', user_password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://97561a5c-78a9-4951-b578-ba513320d705-00-zmtvbpaas1i0.picard.replit.dev/register', formData);
      if (response.data.success) {
        alert(response.data.message);
        console.log('Navigating to dashboard...');
        navigate('/dashboard');
      } else {
        alert(response.data.message || 'Failed to register');
      }
    } catch (err) {
      alert('Failed to register');
    }
  };

  return (
    <main className="home">
      <h1>Register</h1>
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
        <button type="submit">Register</button>
      </form>
      <br/>
      <p>
        Already have an account?{' '}
        <Link className='buttonLink' to="/">Log In</Link>
      </p>
    </main>
  );
}