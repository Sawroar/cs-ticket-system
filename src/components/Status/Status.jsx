import React from 'react';
import img1 from '../../assets/vector1.png'
import img2 from '../../assets/vector2.png'
const Status = () => {
    return (
        <div className='flex justify-between mt-6'>
            <div className={`px-60 py-20 border border-amber-200 text-center bg-[#422AD5] text-white bg-[url('${img1}')]`}>
                <h1>In-Progress</h1>
                <h1 className='font-bold text-5xl'>0</h1>
            </div>
               <div className={`px-60 py-20 border border-amber-200 text-center bg-linear-to-r from-[#54CF68] to-[#00827A]  text-white bg-[url('${img2}')]`}>
                <h1>Resolve</h1>
                 <h1 className='font-bold text-5xl'>0</h1>
            </div>
        </div>
    );
};

export default Status;