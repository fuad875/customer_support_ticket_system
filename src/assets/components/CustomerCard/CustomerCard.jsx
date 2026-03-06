import React from 'react';

const CustomerCard = ({ customer, handleInprogress }) => {
    return (

        <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div onClick={() => handleInprogress(customer)} className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg font-bold text-slate-800 flex-1 pr-4">
                        {customer.title}
                    </h2>
                    <div className={`badge badge-sm border-none py-3 px-4 flex items-center gap-2 font-medium
                    ${customer.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        <span className={`w-2 h-2 rounded-full ${customer.status === 'Open' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                        {customer.status}
                    </div>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-6">
                    {customer.description}
                </p>


                <div className="flex justify-between items-center text-xs font-semibold">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400">#{customer.id}</span>
                        <span className={`uppercase 
                         ${customer.priority === 'HIGH PRIORITY' ? 'text-red-500' :
                                customer.priority === 'MEDIUM PRIORITY' ? 'text-amber-500' : 'text-green-500'}`}>
                            {customer.priority}
                        </span>
                    </div>

                    <div className="flex items-center justify-end gap-4 ">
                        <span className="ml-2">{customer.customer}</span>
                        <div className="flex items-center gap-1 border-l pl-4 border-gray-200">
                          
                            {customer.createdAt}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="card bg-base-100  shadow-sm">

        //     <div onClick={()=>handleInprogress(customer)} className="card-body ">
        //         <h2 className="card-title">
        //             <span>{customer.title}</span>
        //             <div className="text-xm font-xs">{customer.status}</div>
        //         </h2>
        //         <p>{customer.description}</p>
        //         <div className="card-actions">
        //             <div className=" ">{customer.id}</div>
        //             <div className="">{customer.priority}</div>
        //             <div className=" ">{customer.customer}</div>
        //             <div className=" ">{customer.createdAt}</div>
        //         </div>
        //     </div>
        // </div>

    );
};

export default CustomerCard;