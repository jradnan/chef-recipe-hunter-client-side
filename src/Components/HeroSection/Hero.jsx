import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className='my-[80px] lg:flex mx-auto w-full'>
            <div className="picture">
                <img src="https://i.ibb.co/TgmwC5y/1.jpg" alt="" />
            </div>
            <div className="right-content w-96 ml-9 lg:mt-9">
                <h1 className='text-[32px] text-[#43121d] font-[600]'>We pride ourselves on making real food from the best ingredients.</h1>
                <p className='text-[18px] font-[400] my-3 text-[#555]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button className="bg-[#a82d49] my-6  text-[white] btn-outline text-[18px] py-[11px] px-[28px] font-[600]">Learn More  <FontAwesomeIcon className='ml-2' icon={faBookOpen} /></button>
            </div>
        </div>
    );
};

export default Hero;