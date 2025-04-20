import { useState } from 'react';
import axios from 'axios';  // npm install axios react-router-dom
import { Link, useNavigate } from 'react-router-dom';


export default function LoginScreen()
{
    const [formData, setFormData] = useState({user_name: '' , user_password: ''})
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
        const response = await axios.post('http://localhost:3000/login' , formData);  //this Will be the URL of the API I think on riplet
        if(response.data.success)
        {
            alert(response.data.message)
            localStorage.setItem('username', formData.user_name)
            console.log('Navigating to home...')
            navigate('/dashboard')
    }
    else {
      alert(response.data.message);
    }
  }
  catch (err) {
    console.error('Login error:', err);
    alert('An error occurred during login. Please try again.');
  }
};


    return(
        <>
            <h2 className='loginTitle'>Join the Discussion</h2>
            <p className='loginSlogan'>
                Whether you have a question, or you come with the answers.  
                Join the commuinity, everybody has something to share.
            </p>
            <form onSubmit={handleSubmit}>
                <input type='username' placeholder='User Name' required
                    onChange={(e) => setFormData({... formData, user_name: e.target.value})} />
            <br/>
                <input type='password' placeholder='Password' required
                    onChange={(e) => setFormData({... formData, user_password: e.target.value})} />
            <br/>
                    <button type='submit'>Log In</button>
            </form>
            <br/><br/>
            <section className='newUser'>
                <p>
                    Don't already have a login?  Get one by clicking the button below.
                </p>
                <Link className='buttonLink' to='/register'>Sign Up</Link>
            </section>
        </>
    );
}