import React from 'react';
import pepole1 from '../../../assets/images/people1.png'
import pepole2 from '../../../assets/images/people2.png'
import pepole3 from '../../../assets/images/people3.png'
import ReviewCard from './ReviewCard';

const reviewData = [
    {
        "id": 1,
        "image": pepole1,
        "location": "New York, USA",
        "name": "John Smith",
        "text": "Amazing food, excellent service, and a cozy atmosphere. This restaurant exceeded my expectations. I highly recommend their signature dishes!"
    },
    {
        "id": 2,
        "image": pepole2,
        "location": "Paris, France",
        "name": "Sophie Martin",
        "text": "Unforgettable experience! The hotel staff was incredibly friendly and helpful. The rooms were luxurious, and the location was perfect. Can't wait to visit again!"
    },
    {
        "id": 3,
        "image": pepole3,
        "location": "Tokyo, Japan",
        "name": "Takeshi Yamamoto",
        "text": "This museum blew me away! The exhibits were beautifully curated, and the interactive displays were fascinating. A must-visit for art and history enthusiasts!"
    }
]


const ReviewCards = () => {
    return (
        <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-6 mb-40 '>
            {
                reviewData.map(review => <ReviewCard
                    key={review.id}
                    review = {review}
                > </ReviewCard>)
            }
        </div>
    );
};

export default ReviewCards;