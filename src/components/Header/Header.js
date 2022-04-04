import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-gray-300 px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-xl text-gray-600' to='/'>
                    HP Laptop Details Review and Analysis
                </Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/reviews'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>

            </div>
        </div>
    );
};

export default Header;