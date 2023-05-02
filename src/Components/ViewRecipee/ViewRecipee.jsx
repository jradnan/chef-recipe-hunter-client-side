import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewRecipee = () => {
    const chefData = useLoaderData();
    console.log(chefData);
    const { chef_picture, chef_name, bio,  num_recipes, years_of_experience, } = chefData;
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={chef_picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{chef_name}</h1>
            <h1 className='text-[20px] mt-5'>Numbers of recipes: { num_recipes}</h1>
            <h1 className='text-[20px]'>Experience: { years_of_experience} Years</h1>
            <p className="py-6">{bio}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ViewRecipee;