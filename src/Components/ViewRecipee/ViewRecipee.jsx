import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';

const ViewRecipee = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  const { chef_picture, chef_name, bio, num_recipes, years_of_experience, recipes } = chefData;
  console.log(recipes);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={chef_picture} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{chef_name}</h1>
          <h1 className='text-[20px] mt-5 text-[#a82d49]  font-[500]'>Numbers of recipes: {num_recipes}</h1>
          <h1 className='text-[20px]'>Experience: {years_of_experience} Years</h1>
          <p className="py-6 "> <span className='text-[#a82d49] font-[500]'>Chef Bio:</span> {bio}</p>
          <button className="btn btn-primary">Chef Special Recipe</button>
          <div className='lg:flex gap-20 mt-7 shadow-lg'>
            {
              recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
          </div>
          <div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewRecipee;