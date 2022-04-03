import React from 'react';

const AllReviewCard = ({ reviewbyone }) => {
    const { name, review, rating } = reviewbyone;
    return (
        <div>
            <div className='w-2/4 rounded-2xl shadow-lg p-4 bg-green-300'>
                <p className='font-bold'>Name:{name}</p>
                <p className='font-bold'>Review:{review}</p>
                <p className='font-bold'>Ratings:{rating}</p>
            </div>
        </div>
    );
};

export default AllReviewCard;