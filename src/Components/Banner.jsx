import React from 'react';
import banner from '../Images/Banner-Image.png';

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 bg-gray-300 bg-auto p-24'>
            <div className='mt-12'>
                <h1 className='text-3xl text-blue-500 font-extrabold p-2'>Let's go to Mars!</h1>
                <p className='text-l p-2'>Welcome to SpaceX. Space is the boundless three-dimensional extent in which objects and events have relative position and direction. SpaceX has a great mission on mars. Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, capable of carrying humans to Mars and other destinations in the solar system.</p>
                <div className='p-2'>
                    <button className="btn btn-error text-white m-1">Get Started</button>
                    <button className="btn btn-success text-white m-1">Learn More</button>
                </div>

            </div>
            <div className='ml-24'>
                <img className='object-contain h-96 w-96 ...' src={banner} alt="" />
            </div>

        </div>
    );
};

export default Banner;