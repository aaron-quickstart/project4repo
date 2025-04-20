import { useState } from 'react';
import axios from 'axios';  // npm install axios react-router-dom
import { useNavigate } from 'react-router-dom';


export default function Register()
{
    const [formData, setFormData] = useState({user_name: '' , user_password: ''})

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/register' , formData);  //this Will be the URL of the API I think on riplet
            if(response.data)
            {
                alert(response.data.message); 
            }
        } catch (err) {
            alert('Failed to register');
        }

    }

 
    return(
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type='username' placeholder='User Name' required
                    onChange={(e) => setFormData({... formData, user_name: e.target.value})} />
                <input type='password' placeholder='Password' required
                    onChange={(e) => setFormData({... formData, user_password: e.target.value})} />
                    <button type='submit'>Register</button>
            </form>
        </>
    );
}