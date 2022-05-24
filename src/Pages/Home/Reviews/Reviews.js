import React from 'react';
import useReviews from '../../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='container mx-auto mb-10'>
            <h2 className='text-3xl font-bold my-8'>Customer's Reviews:</h2>
            <ul>
                <li className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }

                </li>
            </ul>
        </div>
    );
};

export default Reviews;