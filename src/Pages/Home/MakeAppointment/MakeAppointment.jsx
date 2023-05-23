import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor-small.png'
import ButtonPrimary from '../../../Utilities/ButtonPrimary';

const MakeAppointment = () => {
    return (
        <div className='text-white h-[533px] lg:w-full mb-[84px]' style={{
            backgroundImage: `url(${appointment})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>

            <div className="lg:flex ">
                <div className="">
                    <img src={doctor} className=" hidden lg:block mt-[-107px] w-[610px] h-[640px] " alt='' />
                </div>
                <div className=" md:my-auto my-auto lg:w-[535px] h-[300px] ">
                    <h5 className='text-secondary mb-5 font-bold'>Appointment</h5>
                    <h1 className="text-4xl font-[600]">Make an appointment Today</h1>
                    <p className="py-6 text-justify text-xs ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonPrimary>Get Started</ButtonPrimary>
                </div>

            </div>
        </div>

    );
};

export default MakeAppointment;