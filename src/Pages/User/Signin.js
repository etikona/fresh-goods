import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Signin.css'

const Signin = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState({})
    const { createUser, GoogleLogin } = useContext(AuthContext)

    // Submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // Error displaying
        if (password.length < 6) {
            setError("please give at least 6 characters")
            return;
        }

        // Creating user
        createUser(email, password)
       
        .then(res => {
            const user = res.user;
            handleProfile(name, email);
            
            form.reset();
        })
        .catch(err => console.error(err))
    };

    const handleProfile =(name, email) => {
        const profile = {
            displayName: name,
            email: email,
        }
        console.log(profile);
        fetch('https://fresh-goodes-server.vercel.app/customers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert("Customer created successfully.");
                   
                }
            })
       
    }
    //  Create customer login with Google
    const signIngoogle = () => {
        const provider = new GoogleAuthProvider();
        GoogleLogin(provider)
            .then(res => {
                const user = res.user;
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='bg-slate-200 p-5'>
            <div className='form-container bg-slate-200'>
                <h3 className='form-title'>Sign In</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" required id="" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required id="" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required id="" />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign in" />
                </form>
                <button onClick={signIngoogle} className='outline px-2  outline-offset-2 outline-2 my-3'>continue with Google</button>
                <p className='err-text'>{error}</p>
                <p>All ready have an account?<Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signin;