import React from 'react';

const AllReviewCard = ({ reviewbyone }) => {
    const { name, review, rating, img } = reviewbyone;
    return (
        <div>
            <div className='w-2/4 rounded-2xl shadow-lg p-4 bg-green-300 h-[500px] mb-7'>
                <img src={img} alt="" />
                <p><span className='font-bold'>Name:</span> {name}</p>
                <p><span className='font-bold'>Review-Details:</span> {review}</p>
                <p><span className='font-bold'>Ratings:</span> {rating}</p>
            </div>
        </div>
    );
};

export default AllReviewCard;