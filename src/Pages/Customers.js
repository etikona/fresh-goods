import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const Customers = () => {
    const customers = useLoaderData();
    const [customerUi, setCustomerUi] = useState(customers)
    // Remove Customer 
    const customerDelete = _id => {
        const agree = window.confirm("Are you sure to remove?");
        if (agree) {
            fetch(`https://fresh-goodes-server.vercel.app/customers/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('One customer deleted successfully.');
                        const remainingCustomers = customerUi.filter(customer => customer._id !== _id);
                        setCustomerUi(remainingCustomers);
                    }
                })
        }
    }
    return (
        <div >
            <h2 className='text-3xl font-mono my-5'>All customers are here</h2>
         
            {/* Show all customers data in a table */}
            <div>
                <div className="overflow-x-auto ">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customerUi.map((customer, i) => <tr key={customer._id}>
                                    <td>{i + 1}</td>
                                    <td>{customer.displayName}</td>
                                    <td>{customer.email}</td>
                                    <td><Link to={`/update/${customer._id}`}><button className='btn btn-sm btn-primary'>Edit</button></Link></td>
                                    <td><button onClick={() => customerDelete(customer._id)} className='btn btn-sm btn-error'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customers;