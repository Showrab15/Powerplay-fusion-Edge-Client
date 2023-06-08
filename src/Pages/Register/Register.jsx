import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import registerImage from '../../assets/register-page.svg'
import dynamicTitle from '../../hooks/DynamicTitle';
import SectionHeader from '../../components/SectionHeader';
import registerHeader from '../../assets/registerHeader.jpg'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
const Register = () => {

    dynamicTitle('Register');
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const { createUser, userUpdateProfile } = useAuthContext();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                userUpdateProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.dire('user created succesfully done')
                                    reset();
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error.message))
            })
    }

    return (
        <div>
            <SectionHeader headerImage={registerHeader}
                headerTitle={"Register"}
                headerRoute={"Home   ||   Register"}
            ></SectionHeader>
            <div className="hero overflow-y-auto mt-4 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 mx-auto animate-pulse'>
                        <img src={registerImage} alt="" />
                    </div>
                    <div className="card w-1/2 flex-shrink-0 max-w-sm   outline outline-offset-2 outline-orange-300  bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register('name', { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <p className="text-red-600">Please enter a name.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="name" {...register('photo', { required: true })} name="photo" placeholder="photo url" className="input input-bordered" />
                                {errors.photo && <p className="text-red-600">Please enter a photo url.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <p className="text-red-600">Please enter a valid email.</p>}

                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    {...register('password',
                                        {
                                            required: true,
                                            maxLength: 20,
                                            minLength: 6,
                                            pattern: /^(?=.*[A-Z])(?=.*[\W_]).*$/
                                        })} name="password" placeholder="password" className="input input-bordered relative" />
                                <p onClick={() => setShowPassword(!showPassword)}>

                                    <small className=" absolute -mt-7 ml-48 md:ml-72">
                                        {
                                            showPassword ? <FaEyeSlash ></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </small>
                                </p>
                                {errors.password?.type === 'required' && <p className="text-red-600">Password  is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password  Must Be 6 character Long </p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have at least one  capital letter
                                    and  a special character</p>
                                }


                            </div>

                            <div className="form-control mt-6">
                                <input className="btn text-white bg-red-500 hover:bg-black" type="submit" value="signup" />
                            </div>
                            <p>Already Have an Account in PowerPlay Fusion Edge ? <Link to="/login">Login</Link></p>
                            <div className="divider mb-0">OR</div>

                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;