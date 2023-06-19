import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';


const ErrorPage = ({ errorMessage }) => {
    const error = useRouteError();
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    console.log(error);
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-900">
                <div className="text-white text-center">
                    <h1 className="text-6xl font-bold mb-8">{error.status}</h1>
                    <p className="text-red-600 text-2xl mb-4">{error.statusText}</p>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={goBack}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;