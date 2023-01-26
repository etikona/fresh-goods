import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Customers = () => {
    const customers = useLoaderData();
    console.log(customers);
    return (
        <div>
            <h2>All customers are here</h2>
            <p>Customers: {customers.length}</p>
            <div>
            <div className="overflow-x-auto">
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
    customers.map((customer, i) => <tr key={customer._id}>
        <td>{i+1}</td>
        <td>{customer.displayName}</td>
        <td>{customer.email}</td>
        <td><button className='btn btn-sm btn-primary'>Edit</button></td>
        <td><button className='btn btn-sm btn-error'>Delete</button></td>
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