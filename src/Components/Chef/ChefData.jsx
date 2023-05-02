import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocationDot, faArrowCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ChefData = (props) => {
    // console.log(props.data);

    const { chef_picture, chef_name, years_of_experience, num_recipes, likes } = props.data;
    console.log(likes[0]);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={chef_picture} alt="Chef" /></figure>
            <div className="card-body">
                <h2 className="card-title">{chef_name}</h2>
                <p>Experience: {years_of_experience}</p>
                <p>Numbers of recipes: {num_recipes}</p>
                <p>Likes *4.7</p>
                <div className="card-actions mt-3">
                    <button className="bg-[#a82d49] text-[white] btn-outline text-[18px] py-[11px] px-[28px] font-[600]">View Recipes <FontAwesomeIcon className='ml-2' icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default ChefData;