import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/hp-1.jpg';
import useReview from '../hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='ml-8 mt-5'>
                    <h2 className='text-6xl text-amber-400'>Best Laptop</h2>
                    <h2 className='text-6xl'>We Provide you the best product</h2>
                    <p className='text-2xl mt-4'>We are are providing the best quality Laptops in the world. We are dynamic.We are concern about our Customer.So, We appriciate our Customer's Feedback.</p>
                    <button className='bg-sky-500/100 px-7 py-3 mt-5 text-white'>Details</button>
                </div>

                <div>
                    <img src={img1} alt="" />
                </div>

            </div>

            <div>
                <h1 className='text-center text-5xl mt-10 text-bold'>Customer Review</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-4 ml-10'>
                    {
                        reviews.slice(0, 3).map(reviewbyone => <ReviewCard key={reviewbyone.id} reviewbyone={reviewbyone}></ReviewCard>)
                    }
                </div>
            </div>

            <Link to='/reviews'><p className='text-center text-2xl text-bold bg-blue-300 w-min md:ml-[616px] mb-5 px-20 mt-5'>See All reviews</p></Link>

        </div>
    );
};

export default Home;