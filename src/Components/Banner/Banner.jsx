import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/37ZVkLS/3-1.jpg")` }}>
            <div className=" bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                <div className="mr-[600px]">
                    <h1 className="mb-5 text-[#43121d] text-5xl font-bold">Good food choices are good investments.
                    </h1>
                    <p className="mb-5 text-[black]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="bg-[#a82d49] text-[white] btn-outline text-[18px] py-[11px] px-[28px] font-[600]">Order Now <FontAwesomeIcon icon={faLocationDot} /></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;