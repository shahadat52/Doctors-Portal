import React, { useState } from 'react';
import appointment from '../../../assets/images/appointment.png'
import ButtonPrimary from '../../../Utilities/ButtonPrimary';


const ContractUs = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='mx-auto'>
            <div  style={{
            backgroundImage: `url(${appointment})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className='text-white text-center pt-14 pb-10'>
                <h5 className='text-secondary font-bold'>Contract Us</h5>
                <h2 className='text-4xl'>Stay Connect With Us</h2>
            </div>

            {/* Contract from     */}
            <div className="max-w-md mx-auto"
            >
                <form onSubmit={handleSubmit} className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">

                        <input
                            className="shadow appearance-none border rounded-lg lg:w-[450px] md:w-[450px] sm:w-[336px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">

                        <input
                            className="shadow appearance-none border rounded-lg lg:w-[450px] md:w-[450px] sm:w-[336px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 mx-auto">

                        <textarea
                            className="  shadow appearance-none border lg:w-[450px] md:w-[450px] sm:w-[336px] h-[136px] rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center items-center">
                        <ButtonPrimary
                            className=""
                            type="submit"
                        >
                            Submit
                        </ButtonPrimary>
                    </div>
                </form>
            </div>

        </div>
        </div>
    );
};

export default ContractUs;