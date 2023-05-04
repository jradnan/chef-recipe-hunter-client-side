import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ChefData = (props) => {
    // console.log(props.data);

    const { chef_picture, chef_name, years_of_experience, num_recipes, likes, id } = props.data;
    console.log(likes[0]);
    return (
        <div className="card card-compact lg:w-96 sm:w-80  bg-base-100 shadow-xl">
            <figure><img className='' src={chef_picture} alt="Chef" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#a82d49] font-[600]">{chef_name}</h2>
                <p>Experience: {years_of_experience}</p>
                <p>Numbers of recipes: {num_recipes}</p>
                <p><FontAwesomeIcon className='text-[#a82d49]' icon={faThumbsUp} />  Likes *4.7</p>
                <div className="card-actions mt-3">
                    <Link to={`/recipe/${id}`}><button className="bg-[#a82d49] text-[white] btn-outline text-[18px] py-[11px] px-[28px] font-[600]">View Recipes <FontAwesomeIcon className='ml-2' icon={faArrowRight} /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefData;