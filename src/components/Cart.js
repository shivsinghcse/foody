import { useDispatch, useSelector } from 'react-redux';
import CartItemList from './CartItemList';
import { BsCurrencyRupee } from 'react-icons/bs';
import { clearCart } from '../../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handelClearItem = () => {
        dispatch(clearCart());
    };
    return (
        <>
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
                    <button className="border-1 py-2 p-2 rounded-lg font-semibold m-2 bg-green-500 text-white cursor-not-allowed">
                        Place Order
                    </button>
                    <button
                        className="border-1 py-2 p-2 rounded-lg font-semibold m-2 bg-red-500 text-white"
                        onClick={handelClearItem}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </>
    );
};
export default Cart;
