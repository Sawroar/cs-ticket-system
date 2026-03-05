import React, { use } from 'react';
import CustomerTicket from '../CustomerTicket/CustomerTicket';
import TaskStatus from '../TaskStatus/TaskStatus';

const CustomerTickets = ({ customerTickets,setSelectedCustomerTicket,selectCustomerTicket }) => {
    const customerTicketsData = use(customerTickets)
    console.log(customerTicketsData)
    return (
        <div className='bg-[#eef0f3] '>
            <div className='grid grid-cols-3 gap-3 pt-8 '>
                <div className='col-span-2'>
                    <div className='grid md:grid-cols-2 grid-cols-1'>
                        {customerTicketsData.map(customerTicket => <CustomerTicket key={customerTicket.id}selectCustomerTicket={selectCustomerTicket} setSelectedCustomerTicket={setSelectedCustomerTicket} customerTicket={customerTicket}></CustomerTicket>)}
                    </div>
                </div>

                  <div className=''>
              <TaskStatus selectCustomerTicket={selectCustomerTicket} ></TaskStatus>
           
                </div>
            </div>

        </div>
    );
};

export default CustomerTickets;