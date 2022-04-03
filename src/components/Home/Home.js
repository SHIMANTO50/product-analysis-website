import React, { useEffect, useState } from 'react';
import img1 from '../../images/hp-1.jpg';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('hp.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
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
                <div className='grid grid-cols-3'>
                    {
                        reviews.map(reviewbyone => <ReviewCard key={reviewbyone.id} reviewbyone={reviewbyone}></ReviewCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;