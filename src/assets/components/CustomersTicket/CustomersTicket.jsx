import React, { use } from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';

const CustomersTicket = ({ ticketPromises,handleInprogress }) => {

    const customerData = use(ticketPromises)
    // console.log(customerData);
    return (
        <div className='max-w-[1000px]  mx-auto  mt-4 flex justify-between gap-4'>
            <div className="w-2/3">
                <h1 className='font-bold'>Customer Tickets</h1>
                <div className='grid-cols md:grid grid-cols-2 '>
                    {
                        customerData.map(customer => <CustomerCard key={customer.id}  customer={customer} handleInprogress={handleInprogress}></CustomerCard>)
                    }
                </div>
            </div>


            <div className="w-1/3  p-4 ">
               <div>
                <h1 className="font-bold mb-2">Ticket Summary</h1>
                <p>Select a ticket to add to a Task Status</p>
                </div>
               <div>
                <h1 className="font-bold mb-2">Ticket Summary</h1>
                <p>Select a ticket to add to a Task Status</p>
                </div>
            </div>

        </div>
    );
};

export default CustomersTicket;