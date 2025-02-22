import { useDispatch, useSelector } from 'react-redux';
import CartItemList from './CartItemList';
import { BsCurrencyRupee } from 'react-icons/bs';
import { clearCart } from '../../utils/cartSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRazorpay, RazorpayOrderOptions } from 'react-razorpay';
import { LOGO_URL } from '../../utils/constants';
import EmptyCart from './EmptyCart';
import firebaseAppConfig from '../../utils/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import toast from 'react-hot-toast';
const auth = getAuth(firebaseAppConfig);

const Cart = () => {
    const { error, isLoading, Razorpay } = useRazorpay();
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const cartItems = useSelector((store) => store.cart.items);
    console.log('total', totalPrice);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('loged in');
                setIsLoggedIn(user);
            } else {
                console.log('not loged in');
                setIsLoggedIn(false);
            }
        });
    }, []);

    const dispatch = useDispatch();

    const handelClearItem = () => {
        dispatch(clearCart());
    };

    const buyNow = async (price) => {
        if (isLoggedIn) {
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
                rzp.on('payment.failed', function (response) {
                    console.log(response);
                });
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
                    <div className="text-2xl font-bold underline text-center">
                        Cart
                    </div>
                    <div className="w-[100%]  my-5 md:w-[70%]  mx-auto">
                        <CartItemList items={cartItems} />
                    </div>
                    <div className="text-white text-lg font-semibold bg-green-500 flex justify-between p-2 md:w-[75%] mx-auto md:my-10">
                        <p>Total Price :</p>
                        <p className="flex items-center">
                            <BsCurrencyRupee className="inline" />
                            399
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="border-1 py-2 px-4 rounded-lg font-semibold m-2 bg-green-500 text-white hover:cursor-pointer"
                            onClick={() => buyNow(399)}
                        >
                            Place Order
                        </button>
                        <button
                            className="border-1 py-2 px-4 rounded-lg font-semibold m-2 bg-[#ff5200] text-white hover:cursor-pointer"
                            onClick={handelClearItem}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            ) : (
                <EmptyCart />
            )}
        </>
    );
};
export default Cart;
