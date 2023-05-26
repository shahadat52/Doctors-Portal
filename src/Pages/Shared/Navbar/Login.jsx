import React from 'react';
import logo from '../../../assets/images/Doctor Logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    // <div>
    //   <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    //     <div className="max-w-md w-full space-y-8">
    //       <div>
    //         <img
    //           className="mx-auto h-[250px] w-[250px]"
    //           src={logo}
    //           alt="Logo"
    //         />
    //         <h2 className=" text-center text-3xl font-extrabold text-gray-900">
    //           Log in to your account
    //         </h2>
    //       </div>
    //       <form className="mt-8 space-y-6">
    //         <input
    //           type="email"
    //           className="block w-full px-4 py-3 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //           placeholder="Email address"
    //         />
    //         <input
    //           type="password"
    //           className="block w-full px-4 py-3 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-3"
    //           placeholder="Password"
    //         />
    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center">
    //             <input
    //               id="remember_me"
    //               type="checkbox"
    //               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    //             />
    //             <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
    //               Remember me
    //             </label>
    //           </div>
    //           <div className="text-sm">
    //             <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
    //               Forgot your password?
    //             </a>
    //           </div>
    //         </div>
    //         <div>
    //           <button
    //             type="submit"
    //             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //           >
    //             Log in
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center justify-center  ">
      <div className="max-w-md w-full space-y-8 bg-gradient-to-br  from-pink-500 via-purple-500 to-indigo-500 rounded-lg shadow-xl p-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-200">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                type="email"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="example@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-200">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                type="password"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1"
                placeholder="********"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-blue-200">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium text-red-200">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or log in with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <Link
                href="#"
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Google
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Facebook
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;