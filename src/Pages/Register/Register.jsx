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
    const from = location.state?.from?.pathname || '/';

  

    //     createUser(data.email, data.password)
    //         .then(result => {

    //             const loggedUser = result.user;
    //             console.log(loggedUser);

    //             userUpdateProfile(data.name, data.photoURL)
    //                 .then(() => {
    //                     const saveUser = { name: data.name, email: data.email, photo: data.photo}
    //                     fetch('https://assignment12-server-ten.vercel.app/users', {
    //                         method: 'POST',
    //                         headers: {
    //                             'content-type': 'application/json'
    //                         },
    //                         body: JSON.stringify(saveUser)
    //                     })
    //                         .then(res => res.json())
    //                         .then(data => {
    //                             if (data.insertedId) {
    //                                 reset();
    //                                 Swal.fire({
    //                                     position: 'center',
    //                                     icon: 'success',
    //                                     title: 'Your Account Has Been Created In Powerplay Fusion Edge',
    //                                 });
    //                                 navigate(from, { replace: true });
    //                             }
    //                         })



    //                 })
    //                 .catch(error => console.log(error))
    //         })
    // };






const [confirmPassword, setConfirmPassword] = useState('');





const onSubmit = (data) => {
        console.log(data);
        if (data.password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Confirm Password  Must Be Matched With Password....',
                text: 'Passwords does not match.....',
            });
            return;
        }

        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                userUpdateProfile( data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photo };
                        fetch('https://assignment12-server-ten.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(saveUser),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.insertedId) {
                                    reset();
                                     Swal.fire({
                                         position: 'center',
                                         icon: 'success',
                                         title: 'Your Account Has Been Created In Powerplay Fusion Edge',
                                     });
                                    navigate('/');
                                }
                            });
                    })
                    .catch((error) => console.log(error));
            });
    };

    return (
        <div className="bg-rose-600 rounded-lg">
            <SectionHeader headerImage={registerHeader}
                headerTitle={"Register"}
                headerRoute={"Home   ||   Register"}
            ></SectionHeader>
            <div className="hero overflow-y-auto mt-4 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='md:w-1/2 mx-auto animate-pulse'>
                        <img src={registerImage} alt="" />
                    </div>
                    <div className="authentication-card">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register('name', { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <p className="text-rose-600">Please enter a name.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="name" {...register('photo', { required: true })} name="photo" placeholder="photo url" className="input input-bordered" />
                                {errors.photo && <p className="text-rose-600">Please enter a photo url.</p>}
                            </div>
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
                                {errors.password?.type === 'required' && <p className="text-rose-600">Password  is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-rose-600">Password  Must Be 6 character Long </p>}
                                {errors.password?.type === 'pattern' && <p className="text-rose-600">Password must have at least one  capital letter
                                    and  a special character</p>
                                }


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    name="confirmPassword"
                                    placeholder="confirm password"
                                    className="input input-bordered relative"
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-600">Please confirm your password.</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white " type="submit" value="signup" />
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