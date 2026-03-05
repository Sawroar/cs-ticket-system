import React from 'react';

const CompletedTask = ({ticket}) => {
    return (
        <div className='w-80  bg-white p-2 m-3'>
          <p className='mt-2 text-center'>{ticket.title}</p>
          <button className='btn  w-full bg-green-500'>Completed</button>
        </div>
    );
};

export default CompletedTask;