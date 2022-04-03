import React, { useEffect, useState } from 'react';
import AllReviewCard from '../AllReviewCard/AllReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('hp.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
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