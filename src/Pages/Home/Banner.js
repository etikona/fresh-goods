import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div>
            <div className="carousel my-10">
  <div id="item1" className="carousel-item w-90 m-auto">
    <img  src="https://media.istockphoto.com/id/164981421/photo/large-group-of-food-shoot-on-white-backdrop.jpg?s=612x612&w=0&k=20&c=S3UjegrKBG-HyZdYQmOeBCk1Cfk7C7XZrUGb0n56Gy8=" className="w-full" />
  </div> 
</div> 
            </div>
      
<div>
<div className="hero min-h-screen my-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1593629718768-e8860d848a15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=503&q=80" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-thin text-sky-800 ">FOOD & GROCERY</h1>
      <p>
      "Shop for your groceries online and have them delivered straight to your doorstep! Our online grocery store offers a wide variety of fresh produce, pantry staples, and household essentials. Conveniently browse and shop from the comfort of your own home. Plus, enjoy special deals and discounts when you shop with us. Don't waste time at the store, shop online now and make your life easier!"
      </p>
      <p className="py-6 text-sky-800 font-bold">Groceries delivered in 30 minutes.</p>
      <button className="btn btn-outline btn-secondary">Orders</button>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Banner;