import { useState } from 'react';
import axios from 'axios';  // npm install axios react-router-dom



export default function LoginScreen()
{
    const [formData, setFormData] = useState({username: '' , password: ''})

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/getUsers' , formData);  //this Will be the URL of the API I think on riplet
        if(response)
        {
            console.log(response);
        }
    }


    return(
        <>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='User Name' required
                    onChange={(e) => setFormData({... formData, email: e.target.value})} />
                <input type='password' placeholder='Password' required
                    onChange={(e) => setFormData({... formData, password: e.target.value})} />
                    <button type='submit'>Login</button>
            </form>
        </>
    );
}