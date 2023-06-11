import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuthContext from '../../hooks/useAuthContext';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import loginImage from '../../assets/login-page.svg';
import loginHeader from '../../assets/LoginHeader.jpg'
import SectionHeader from '../../components/SectionHeader';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import dynamicTitle from '../../hooks/DynamicTitle';
const Login = () => {

dynamicTitle('Login')
    // const captchaRef = useRef(null);
    const [error, setError] = useState('')
    const { signIn } = useAuthContext()
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [showPassword, setShowPassword] = useState(false)


    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();


  
    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire('User Login Successfully Done')
                navigate(from, { replace: true });
                reset()

            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }



    return (
        <div className="bg-rose-600 rounded-lg">
            <SectionHeader headerImage={loginHeader}
                headerTitle={"Login"}
                headerRoute={"Home || Login"}
            ></SectionHeader>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="md:w-1/2 mx-auto animate-pulse">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card md:w-1/2 flex-shrink-0 max-w-sm   outline outline-offset-2 outline-rose-600  bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <p className="text-rose-600">Please enter a valid email.</p>}

                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    {...register('email', { required: true })} 
                                      
                                       name="password" placeholder="password" className="input input-bordered relative" />
                                <p onClick={() => setShowPassword(!showPassword)}>

                                    <small className=" absolute -mt-7 ml-48 md:ml-72">
                                        {
                                            showPassword ? <FaEyeSlash ></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </small>
                                </p>



                            </div>

                            <div className="form-control mt-6">
                                <input className="btn text-white " type="submit" value="login" />
                            </div>
                            <p>New in PowerPlay Fusion Edge ? <Link to="/register">Register</Link></p>
                            <div className="divider mb-0">OR</div>

                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;