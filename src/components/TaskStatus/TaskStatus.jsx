import React from 'react';
import CompletedTask from '../CompletedTask/CompletedTask';

const TaskStatus = ({selectCustomerTicket}) => {
    console.log(selectCustomerTicket)
    return (
        <div>
            <h1 className='font-bold'>Task Status</h1>
         {selectCustomerTicket.length===0? "no task Selected": selectCustomerTicket.map(ticket=> <CompletedTask ticket={ticket} key={ticket.id} ></CompletedTask>) }
              <h1>Resolved Task</h1>
              <p>No resolved tasks yet.</p>
        </div>
    );
};

export default TaskStatus;