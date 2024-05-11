import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuthContext from '../../../hooks/useAuthContext';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {

    const { signInWithGoogle } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    //handle login with google login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
                fetch('https://assignment12-server-ten.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Account Login Successfully By Google',
                            });
                            navigate(from, { replace: true });
                        }

                    }
                    )
            })
    }


    return (
        <>
            <button onClick={handleGoogleLogin} className="mx-auto mb-4 px-8 btn text-white ">Sign In With <FaGoogle className="text-primary "></FaGoogle> </button>
        </>
    );
};

export default SocialLogin;