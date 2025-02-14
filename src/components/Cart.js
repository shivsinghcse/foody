import { useSelector } from 'react-redux';
import CartItemList from './CartItemList';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <>
            <div className="p-5 m-4">
                <div className="text-2xl font-bold underline text-center">
                    Cart
                </div>
                <div className="w-[90%] md:w-[70%] mx-auto">
                    <CartItemList items={cartItems} />
                </div>
            </div>
        </>
    );
};
export default Cart;
