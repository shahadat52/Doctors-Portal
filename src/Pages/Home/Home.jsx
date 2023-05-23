import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards/InfoCards';
import Services from './Services/Services';
import DentalCare from './DentalCare/DentalCare';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import PatientsSay from './PatientsSay/PatientsSay';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <PatientsSay></PatientsSay>
        </div>
    );
};

export default Home;