import React from 'react';

const Review = (props) => {
    const { name, comment, ratings } = props.review;
    return (
        <div className=' '>

            <div className='text-left p-8 h-full'>
                <h3 className='font-bold bg-green-200 p-2 pl-6'>{name}</h3>
                <h4 className='my-4 text-2xl'>{comment}</h4>
                <p>Ratings >>  <span className='text-red-500 font-bold'>{ratings}</span></p>
                <br />

            </div>
        </div>
    );
};

export default Review;