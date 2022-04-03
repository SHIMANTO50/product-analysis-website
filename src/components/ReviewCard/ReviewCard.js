import React from 'react';

const ReviewCard = ({ reviewbyone }) => {
    const { name, review, rating } = reviewbyone;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default ReviewCard;