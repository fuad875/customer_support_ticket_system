import React, { use } from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';

const CustomersTicket = ({ ticketPromises,handleInprogress,inProgress }) => {

    const customerData = use(ticketPromises)
    // console.log(customerData);
    return (
        <div className='max-w-[1000px]  mx-auto  mt-4 flex justify-between gap-4'>
            <div className="w-2/3 mt-4">
                <h1 className='font-bold'>Customer Tickets</h1>
                <div className='grid-cols md:grid grid-cols-2 '>
                    {
                        customerData.map(customer => <CustomerCard 
                        key={customer.id} 
                         customer={customer}
                          handleInprogress={handleInprogress}
                          inProgress={inProgress}
                          ></CustomerCard>)
                    }
                </div>
            </div>


            <div className="w-1/3  p-4 ">
               <div>
                <h1 className="font-bold mb-2">Task Status</h1>
                <p>Select a ticket to add to a Task Status</p>
                {
                    inProgress.map(ticket =>
                    (
                        <div key={ticket.id} className="border p-2 mb-2 rounded">
                        <p>{ticket.title}</p>
                        <button className='btn btn-sm'>Complete</button>
                        </div>
                
                    
                    )
                    )
                }
                </div>

               <div>
                <h1 className="font-bold mb-2">Resovle Task</h1>
                <p>Select a ticket to add to a Task Status</p>
                </div>
            </div>

        </div>
    );
};

export default CustomersTicket;