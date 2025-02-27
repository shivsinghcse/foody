import { useDispatch, useSelector } from 'react-redux';
import CartItemList from './CartItemList';
import { BsCurrencyRupee } from 'react-icons/bs';
import { clearCart } from '../../utils/cartSlice';
import { addRestaurant, clearRestaurant } from '../../utils/resSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRazorpay, RazorpayOrderOptions } from 'react-razorpay';
import { DUMMY_IMG, LOGO_URL, RES_CART_IMG } from '../../utils/constants';
import EmptyCart from './EmptyCart';
import firebaseAppConfig from '../../utils/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
const auth = getAuth(firebaseAppConfig);

const Cart = () => {
    const { error, isLoading, Razorpay } = useRazorpay();
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [loader, setLoader] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);
    console.log('total', cartItems);

    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log('loged in');
                setIsLoggedIn(user);
            } else {
                // console.log('not loged in');
                setIsLoggedIn(false);
            }
        });
    }, []);

    const restaurant = useSelector((store) => store.restaurant.res);
    console.log('restaurant', restaurant);

    const dispatch = useDispatch();

    const handelClearItem = () => {
        dispatch(clearCart());
        dispatch(clearRestaurant());
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        cartItems.map((item) => {
            const price = item?.card?.info?.price
                ? item?.card?.info?.price
                : item?.card?.info?.defaultPrice;

            const totalItemPrice = Math.floor((price / 100) * item?.quantity);
            totalPrice += totalItemPrice;
        });
        return totalPrice;
    };

    const buyNow = async (price) => {
        if (isLoggedIn) {
            setLoader(true);
            try {
                const { data } = await axios.post(
                    'https://payment-server-tau.vercel.app/order',
                    {
                        amount: price,
                    }
                );
                // console.log(data);
                const options = {
                    key: 'rzp_test_kGBtJmWd9jOHTh',
                    amount: data.amount,
                    order_id: data.order_id,
                    name: 'onlinefoodstore',
                    description: 'your meal',
                    image: LOGO_URL,
                    handler: function (response) {
                        console.log(response);
                    },
                };
                const rzp = new Razorpay(options);
                rzp.open();
                setLoader(false);

                rzp.on('payment.failed', function (response) {
                    console.log(response);
                });
                // navigate('/');
                // dispatch(clearCart());
                // dispatch(clearRestaurant());
            } catch (err) {
                console.log(err);
            }
        } else {
            toast.error('Login First');
        }
    };

    return (
        <>
            {cartItems.length > 0 ? (
                <div className="p-1 m-1">
                    <div className="md:w-4/12 shadow md:shadow-md rounded-md mx-auto md:my-8 flex md:space-x-6 space-x-4 md:p-4 p-2 justify-center">
                        <img
                            src={
                                RES_CART_IMG + restaurant[0]?.cloudinaryImageId
                                    ? RES_CART_IMG +
                                      restaurant[0]?.cloudinaryImageId
                                    : DUMMY_IMG
                            }
                            className="shadow-lg rounded w-24 "
                        />
                        <div>
                            <h2 className="text-2xl font-bold">
                                {restaurant[0]?.name}
                            </h2>
                            <label className="text-md text-gray-600 font-medium">
                                {restaurant[0]?.areaName}
                            </label>
                        </div>
                    </div>
                    <div className="w-[100%]  my-5 md:w-[70%]  mx-auto">
                        <CartItemList items={cartItems} />
                    </div>
                    <div className=" md:text-lg font-medium md:font-semibold border-2 border-gray-300 flex justify-between py-2 px-6 md:w-[70%] mx-auto md:my-10">
                        <p>Total Price :</p>
                        <p className="flex items-center">
                            <BsCurrencyRupee className="inline" />
                            {getTotalPrice()}
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="border-2 py-2 px-4 rounded-lg font-semibold m-2 bg-green-500 hover:bg-white  hover:text-green-700 border-green-600 text-white hover:cursor-pointer duration-300"
                            onClick={() => buyNow(getTotalPrice())}
                        >
                            Place Order
                        </button>
                        <button
                            className="border-2 py-2 px-4 rounded-lg font-semibold m-2 bg-[#ff5200] hover:bg-white hover:border-[#ff5200] hover:text-[#ff5200] text-white hover:cursor-pointer duration-300"
                            onClick={handelClearItem}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            ) : (
                <EmptyCart />
            )}
            {loader && (
                <div className="w-full h-full bg-[#5a5a5aa1] fixed top-0 left-0 flex flex-col justify-center items-center">
                    <svg
                        className="size-16 rounded-full border-6 border-t-[#ff5200] border-[#ffffff] animate-spin"
                        viewBox="0 0 24 24"
                    ></svg>

                    <h1 className="text-3xl text-[#ff5200]  px-6 py-2 font-bold mt-5 bg-white">
                        Redirecting to Payment page...
                    </h1>
                </div>
            )}
        </>
    );
};
export default Cart;
