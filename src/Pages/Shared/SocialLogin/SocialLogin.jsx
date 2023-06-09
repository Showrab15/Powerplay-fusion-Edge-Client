import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuthContext from '../../../hooks/useAuthContext';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const SocialLogin = () => {

    const { signInWithGoogle } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();

    //handle login with google login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                        alert('user login successfull by google')
                    }
                    )
            })
    }


    return (
        <>
            <button onClick={handleGoogleLogin} className="mx-auto mb-4 bg-red-500 hover:bg-black btn text-white ">Sign In With <FaGoogle className="text-primary"></FaGoogle> </button>
        </>
    );
};

export default SocialLogin;