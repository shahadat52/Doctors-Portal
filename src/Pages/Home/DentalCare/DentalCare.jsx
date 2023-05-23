import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import ButtonPrimary from '../../../Utilities/ButtonPrimary';

const DentalCare = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse md:flex-row-reverse sm:flex-col-reverse ">
                    <div className="  lg:px-[120px] ">
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-justify ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonPrimary>Get Started</ButtonPrimary>
                    </div>
                    <div className="card flex w-full ">
                        <div className="card-body lg:w-1/2 mx-auto">
                            <img src={treatment} className="max-w-sm rounded-lg shadow-2xl w-[458px] h-[576px]" alt='' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;