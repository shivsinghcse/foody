import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../utils/cartSlice';
import { clearRestaurant } from '../../utils/resSlice';

const CartItemList = ({ items }) => {
    // console.log(items);

    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart.items);
    // console.log('items', cartitems[0].quantity);

    const getItemQuantity = (itemId) => {
        const item = cartitems.find(
            (cartItem) => cartItem.card.info.id === itemId
        );
        return item ? item.quantity : 0;
    };

    const getPrice = (item) => {
        const price = item?.card?.info?.price
            ? item?.card?.info?.price
            : item?.card?.info?.defaultPrice;

        let totalItemPrice = Math.floor((price / 100) * item?.quantity);

        return totalItemPrice;
    };

    const increaseQuantity = (item) => {
        dispatch(addItem(item));
    };
    const decreaseQuantity = (item) => {
        // if (item.quantity === 1) {
            // dispatch(removeItem(item));
            // dispatch(clearRestaurant());
        // }
        dispatch(removeItem(item));
    };
    return (
        <>
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="w-[100%]  flex justify-between border-b-1 md:border-b-2 border-gray-300   md:px-5 md:py-1"
                    >
                        <div className="flex items-start gap-1 md:gap-5">
                            <div className="flex  space-x-1 px-1 md:px-2">
                                <p className="mt-1">
                                    {item.card.info.itemAttribute
                                        .vegClassifier === 'VEG' ? (
                                        <span className="border-1 md:border-2 border-green-500 p-[1px]  md:pb-[0.7px] rounded text-[5px]  md:text-[8px]">
                                            🟢
                                        </span>
                                    ) : (
                                        <span className="border-1 md:border-2 border-red-500 p-[1px] pb-[0.4px] md:pb-[0.7px] rounded text-[5px] md:text-[8px]">
                                            🔴
                                        </span>
                                    )}
                                </p>
                                <div>
                                    <p className="text-[14px] md:text-lg font-medium md:font-bold md:mt-2 mt-1 mb-1 leading-5 ">
                                        {item.card.info.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        ₹
                                        {item?.card?.info?.price === undefined
                                            ? Math.floor(item?.card?.info?.defaultPrice /
                                              100)
                                            : Math.floor(item?.card?.info?.price / 100)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-2 gap-1">
                            <div className="flex items-center border border-gray-300">
                                <button
                                    className=" text-md  bg-gray-100 hover:bg-gray-200  font-semibold py-1 px-2  cursor-pointer"
                                    onClick={() => decreaseQuantity(item)}
                                >
                                    -
                                </button>
                                <span className="font-semibold bg-wgite py-1 px-2">
                                    {getItemQuantity(item.card.info.id)}
                                </span>
                                <button
                                    className=" text-md bg-gray-100 hover:bg-gray-200  font-semibold py-1 px-2  cursor-pointer"
                                    onClick={() => increaseQuantity(item)}
                                >
                                    +
                                </button>
                            </div>
                            <p>₹{getPrice(item)}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CartItemList;
