import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({ reviewbyone }) => {
    const { name, review, rating } = reviewbyone;
    return (
        <>
            <div className='w-2/4 rounded-2xl shadow-lg p-4 bg-green-300'>
                <p className='font-bold'>Name:{name}</p>
                <p className='font-bold'>Review:{review}</p>
                <p className='font-bold'>Ratings:{rating}</p>
            </div>

        </>

    );
};

export default ReviewCard;