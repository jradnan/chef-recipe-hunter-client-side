import React, { useEffect, useState } from 'react';
import ChefData from './ChefData';

const Chef = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    chefData.map(data => <ChefData key={data.id} data={data}></ChefData>)
                }
            </div>
        </div>
    );
};

export default Chef;