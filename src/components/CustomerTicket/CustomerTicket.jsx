import React from 'react';
import elipse from "../../assets/Ellipse_1.png"
import { toast } from 'react-toastify';
const CustomerTicket = ({ customerTicket,selectCustomerTicket,setSelectedCustomerTicket }) => {
    // console.log(customerTicket)
    const handleTicket=(ticket)=>{
        console.log(ticket)
setSelectedCustomerTicket([...selectCustomerTicket,ticket])
toast("Ticket Added to The Task List")
    }
    return (
        <div>
            <div className='p-4 m-2 bg-white cursor-pointer' onClick={()=>{handleTicket(customerTicket)}}>
                <div className='flex justify-between'>
                    <h1 className='font-medium'>{customerTicket.title}</h1>
                    <div className='flex justify-around bg-[#B9F8CF] rounded-2xl p-2'>
<img src={elipse} height={10} width={20} alt="" />
                    <p className='text-sm ml-2'>  {customerTicket.status}</p>
                    </div>
                </div>
                <p className='text-[#627382] text-sm'>{customerTicket.description}</p>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <p className='text-[#627382] text-sm'>{customerTicket.id}</p>
                        <p className={`text-sm ${customerTicket.priority==='high'? 'text-red-500': "text-black" }`}>{customerTicket.priority}</p>
                    </div>
                    <div className='flex items-center gap-3 text-sm'>
                        <p className='text-[#627382]'>{customerTicket.customer}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

                        <p className='text-[#627382]'><span></span>{customerTicket.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicket;