import React from "react";

const Banner = () => {
    return (
        <div className="px-4 py-12 rounded mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1663013668671-d453f319544f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Resale Furniture</h1>
                        <p className="mb-5">This is the buy and resale furniture website where you can buy and sell to authenticate customers.
                        </p>
                        <button className="btn btn-primary">Get Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
