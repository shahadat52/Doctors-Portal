import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards/InfoCards';
import Services from './Services/Services';
import DentalCare from './DentalCare/DentalCare';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Home;