import React from 'react';

const Recipe = (props) => {
    console.log(props);

    const {name,ingredients, cooking_method, rating} = props.recipe;
    
    return (
        <div>
           <h1> <span className='text-[#a82d49] text-[16px] font-[500]'>Recipe:</span> {name}</h1>
           <div>
            <h1 className='text-[#a82d49] text-[16px] font-[500]'>Ingredients</h1>
           {
                ingredients.map(ingredient => <li>  {ingredient}</li>)
            }
            <p> <span className='text-[#a82d49]  font-[500]'>Cooking Method: </span>{cooking_method}</p>
           </div>
        </div>
    );
};

export default Recipe;