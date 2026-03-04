import React, { use } from 'react';
import CustomerTicket from '../CustomerTicket/CustomerTicket';

const CustomerTickets = ({ customerTickets }) => {
    const customerTicketsData = use(customerTickets)
    console.log(customerTicketsData)
    return (
        <div className='bg-[#eef0f3] '>
            <div className='grid grid-cols-3 gap-3 pt-8 '>
                <div className='col-span-2'>
                    <div className='grid md:grid-cols-2 grid-cols-1'>
                        {customerTicketsData.map(customerTicket => <CustomerTicket key={customerTicket.id} customerTicket={customerTicket}></CustomerTicket>)}
                    </div>
                </div>

                  <div className=''>
              <h1>Task Status </h1>
              <p>No  tasks yet.</p>
              <h1>Resolved Task</h1>
              <p>No resolved tasks yet.</p>
                </div>
            </div>

        </div>
    );
};

export default CustomerTickets;