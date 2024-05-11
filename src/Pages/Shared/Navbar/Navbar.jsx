import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import Button from '../../../components/Button';
import logo from '../../../assets/logo.png'
import Theme from '../../../components/Theme';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, logOut } = useAuthContext();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const navListOptions = <>
        <li>
            <NavLink
                to='/'
                aria-label='Home'
                title='Home'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to='/instructors'
                aria-label='instructors'
                title='instructors'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Instructors
            </NavLink>
        </li>



        <li>
            <NavLink
                to='/classes'
                aria-label='Classes'
                title='Classes'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Classes
            </NavLink>
        </li>


        <li>
            {user && <NavLink

                to={`${isAdmin ? 'dashboard/allUsers' : isInstructor ? 'dashboard/myClass' : 'dashboard/mySelectedClass'}`}
                aria-label='Dashboard'
                title='Dashboard'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Dashboard
            </NavLink>}
        </li>


        <li>
            <Theme></Theme>
        </li>

        <li>
            {
                user && <img title={user.displayName} referrerPolicy='no-referrer' className="w-[30px] lg:block hidden h-[30px] rounded-full mr-4" src={user.photoURL} alt="" />
            }
        </li>



        <li>
            {
                user ? <NavLink
                    onClick={handleLogOut}
                    aria-label='logout'
                    title='logout'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                >
                    <Button buttonText={"Logout"}></Button>
                </NavLink> :
                    <NavLink
                        to='/login'
                        aria-label='login'
                        title='login'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        <Button buttonText={"Login"}></Button>
                    </NavLink>
            }
        </li>
    </>

    return (
        <div>
            <div className='relative rounded-lg  text-black bg-rose-600 flex items-center justify-around'>

                <NavLink
                    to='/'
                    aria-label='PowerPlay-Fusion-Edge'
                    tittle="Powerplay Fusion Edge"
                    className='inline-flex items-center'
                >
                    <div data-tooltip="PowerPlay-Fusion-Edge" className='flex  tooltip items-center justify-center '>
                        <img className="w-20 h-20" src={logo} alt="" />
                    </div>

                </NavLink>
                <ul className='items-center  text-base font-medium hidden space-x-8 lg:flex'>
                    {navListOptions}
                </ul>
                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>

                                    <NavLink
                                        to='/'
                                        aria-label='PowerPlay-Fusion-Edge'
                                        title="PowerPlay Fusion Edge"
                                        className='inline-flex items-center'
                                    >
                                        <div data-tooltip="PowerPlay-Fusion-Edge" className='flex  tooltip items-center justify-center '>
                                            <img className="w-20 h-20" src={logo} alt="" />
                                        </div>

                                    </NavLink>
                                    <div>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        {navListOptions}
                                    </ul>

                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;