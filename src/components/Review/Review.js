import React, { useEffect, useState } from 'react';
import AllReviewCard from '../AllReviewCard/AllReviewCard';
import useReview from '../hooks/useReview';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            {
                <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-4 ml-10'>
                    {
                        reviews.map(reviewbyone => <AllReviewCard key={reviewbyone.id} reviewbyone={reviewbyone}></AllReviewCard>)
                    }
                </div>
            }
        </div>
    );
};

export default Review;