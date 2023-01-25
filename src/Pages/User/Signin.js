import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Signin.css'

const Signin = () => {
    const [error, setError] = useState(null);
    const { createUser, updateUserProfile, GoogleLogin } = useContext(AuthContext)

    // Submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
        // Error displaying
        if (password.length < 6) {
            setError("please give at least 6 characters")
            return;
        }

        // Creating user
        createUser(email, password)
            .then(res => {
                const user = res.user;
                handleProfile(name)
                toast.success("Create new user successfully")
                form.reset();
            })
            .catch(err => {
                const msg = err.message;
            })
    };

    // Log in with Google
    const Google = () => {
        const provider = new GoogleAuthProvider();
        GoogleLogin(provider)
            .then(() => {
            })
            .catch(error =>
                console.error(error),
                setError(error.message)
            )
    }

    //  Handle user profile
    const handleProfile = (name) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(() => { })
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
                <button onClick={Google} className='outline px-2  outline-offset-2 outline-2 my-3'>continue with Google</button>
                <p className='err-text'>{error}</p>
                <p>All ready have an account?<Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signin;