import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import phone from '../../../../assets/icons/phone.svg'
import marker from '../../../../assets/icons/marker.svg'
import InfoCard from '../InfoCard/InfoCard';

const cardData = [
    {
        id: 1,
        name: "Opening Hours",
        description: "Open 9:00 am to 5:00 pm everyday",
        icon: clock,
        bgClass: "bg-gradient-to-r from-primary to-secondary"
    },
    {
        id: 2,
        name: "Visit our location",
        description: "Brooklyn, NY 10036, United States",
        icon: marker,
        bgClass: "bg-accent"
    },
    {
        id: 3,
        name: "Contract us now",
        description: "+000 123 456789",
        icon: phone,
        bgClass: "bg-gradient-to-r from-primary to-secondary"
    },
]
const InfoCards = () => {
    return (
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;