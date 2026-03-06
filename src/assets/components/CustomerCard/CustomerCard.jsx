import React from 'react';

const CustomerCard = ({customer,handleInprogress}) => {
    return (
        
            <div className="card bg-base-100  shadow-sm">
              
                <div onClick={()=>handleInprogress(customer)} className="card-body ">
                    <h2 className="card-title">
                        <span>{customer.title}</span>
                        <div className="text-xm font-xs">{customer.status}</div>
                    </h2>
                    <p>{customer.description}</p>
                    <div className="card-actions">
                        <div className=" ">{customer.id}</div>
                        <div className="">{customer.priority}</div>
                        <div className=" ">{customer.customer}</div>
                        <div className=" ">{customer.createdAt}</div>
                    </div>
                </div>
            </div>
        
    );
};

export default CustomerCard;