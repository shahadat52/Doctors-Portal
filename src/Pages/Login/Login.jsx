import React, { useContext, useState } from 'react';
import logo from '../../assets/images/Doctor Logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthContext';
import Swal from "sweetalert2";
import { toast } from 'react-hot-toast';
import { useToken } from '../../../src/Hooks/useToken';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { loginWithEmailAndPassword } = useContext(AuthContext)
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useToken(loginEmail)

    if (token) {
        navigate(from, { replace: true })
        reset()
    }
    const handleLogin = (data) => {
        loginWithEmailAndPassword(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginEmail(data.email)
                toast.success('Successfully login')
                // Swal.fire('Success', 'User Create success', 'success')
                // navigate(from, { replace: true })
                // reset()
            })
    };
    return (

        <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 rounded-lg shadow-md p-8">
                <div className="text-center">
                    <img
                        className="mx-auto h-40 w-auto"
                        src={logo}
                        alt="Logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Log in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            className={`${errors.email ? 'border-red-500' : 'border-gray-300'
                                } appearance-none block w-full px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm`}
                            placeholder="Email address"
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="mt-4">
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters',
                                },
                            })}
                            className={`${errors.password ? 'border-red-500' : 'border-gray-300'
                                } appearance-none block w-full px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm`}
                            placeholder="Password"
                        />
                        {errors.password && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                {...register('rememberMe')}
                            />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-indigo-200">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <Link href="#" className="font-medium text-red-200 hover:text-gray-100">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in
                        </button>
                        <p className='text-center text-xs'>New to Doctors-Portal <Link to="/signUp" className="font-medium text-red-200 hover:text-gray-200">
                            Create a new account
                        </Link> </p>
                    </div>
                    <div className='mb-[-500px]'>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;