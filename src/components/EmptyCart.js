import React from 'react';
import { Link } from 'react-router';

const EmptyCart = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[90vh]">
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
                    alt="empty_cart_image"
                    className="h-[35vh]"
                />

                <div className="text-2xl font-bold my-3 text-[#35383D]">
                    Your cart is empty
                </div>
                <div className="text-md text-gray-700">
                    You can go to home page to view more restaurants
                </div>
                <Link to="/">
                    <div class="my-5 bg-[#FF5200] text-white font-bold py-3 px-5 uppercase">
                        See restaurants near you
                    </div>
                </Link>
            </div>
        </>
    );
};

export default EmptyCart;
