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
    const handleGoogleSignIn = () => {

        signInWithGoogle(googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                const name = loggedInUser.displayName;
                const email = loggedInUser.email;
                const savedUser = { name: name, email: email }
                fetch('http://localhost:5000/users',  {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire('Account Has Been Created By Google');
                        navigate(from, { replace: true });
                    }
                    )

            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <>
            <button onClick={handleGoogleSignIn} className="mx-auto mb-4 bg-red-500 hover:bg-black btn text-white ">Sign In With <FaGoogle className="text-primary"></FaGoogle> </button>
        </>
    );
};

export default SocialLogin;