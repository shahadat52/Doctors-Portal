import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards/InfoCards';
import Services from './Services/Services';
import DentalCare from './DentalCare/DentalCare';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import PatientsSay from './PatientsSay/PatientsSay';
import ContractUs from './ContractUs/ContractUs';

const Home = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <PatientsSay></PatientsSay>
            <ContractUs></ContractUs>

        </div>
    );
};

export default Home;