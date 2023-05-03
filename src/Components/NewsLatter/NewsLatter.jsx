import React from 'react';

const NewsLatter = () => {
    return (
        <div className='text-center lg:w-[50%] mx-auto my-20'>
            <h1 className=' text-[#43121d] text-[36px] font-[700]'>Hurry up! Subscribe our newsletter
                and get 25% Off</h1>
            <p className='text-[18px] font-[400] text-[#555] my-8'>Limited time offer for this month. No credit card required.</p>
            <input type="text" placeholder='Email Address Here' className='border-4 p-2 w-96' />
            <button className="bg-[#a82d49] text-[white] lg:ml-8 btn-outline text-[18px] py-[11px] px-[28px] font-[600]">Subscribe</button>
        </div>
    );
};

export default NewsLatter;