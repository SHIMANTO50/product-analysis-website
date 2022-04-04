import React from 'react';


const ReviewCard = ({ reviewbyone }) => {
    const { name, review, rating } = reviewbyone;
    return (
        <>
            <div className='w-2/4 rounded-2xl shadow-lg p-4 bg-green-300'>
                <p><span className='font-bold'>Name:</span> {name}</p>
                <p><span className='font-bold'>Review-Details:</span> {review}</p>
                <p><span className='font-bold'>Ratings:</span> {rating}</p>
            </div>

        </>

    );
};

export default ReviewCard;