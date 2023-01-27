import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const customerData = useLoaderData();
    // console.log(data);
    const [customer, setCustomer] = useState(customerData)
    const customerUpdate = event => {
        event.preventDefault();
        fetch(`https://fresh-goodes-server.vercel.app/customers/${customerData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Customer's information edited successfully.!")
                    event.target.reset();
                }

            })
    }
    const handleInputChange = event => {
        event.preventDefault();
        const field = event.target.name;
        const value = event.target.value;
        const newCustomer = { ...customer }
        newCustomer[field] = value;
        setCustomer(newCustomer);

    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <form onSubmit={customerUpdate}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <input type="text" onChange={handleInputChange} defaultValue={customerData.displayName} name="displayName" id="" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={handleInputChange} defaultValue={customerData.email} name="email" id="" />
                        </div>
                        <input className='btn-submit' type="submit" value="Update" />
                    </div>
                </div>
            </form>




        </div>
    );
};

export default Update;