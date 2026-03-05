import React from 'react';
import { toast } from 'react-toastify';

const CompletedTask = ({ticket}) => {
    const handleTaskClick=()=>{
        toast("task Completed")
    }
    return (
        <div className='w-80  bg-white p-2 m-3'>
          <p className='mt-2 text-center'>{ticket.title}</p>
          <button onClick={()=>{handleTaskClick()}} className='btn  w-full bg-green-500'>Completed</button>
        </div>
    );
};

export default CompletedTask;