import { useDispatch, useSelector } from 'react-redux';
import { DUMMY_IMG, RES_MENU_IMG } from '../../utils/constants';
import { addItem, clearCart } from '../../utils/cartSlice';
import toast from 'react-hot-toast';
import Star from './Star';
import { addRestaurant, clearRestaurant } from '../../utils/resSlice';
import { useState } from 'react';

const ItemList = ({ items, resData }) => {
    const [freshStart, setFreshStart] = useState(false);
    // console.log('items', addItem);
    // console.log('res', resData);

    const cartItems = useSelector((store) => store.cart.items);
    // console.log('cartItems', cartItems);

    const restaurant = useSelector((store) => store.restaurant.res);
    // console.log('restaurant', restaurant[0]);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        if (cartItems.includes(item)) {
            toast.error('Already added to the Cart');
        } else {
            if (!restaurant?.includes(resData)) {
                if (restaurant.length === 0) {
                    dispatch(addRestaurant(resData));
                    dispatch(addItem(item));
                    toast.success('Added to the cart');
                } else {
                    if (
                        JSON.stringify(restaurant[0]) ===
                        JSON.stringify(resData)
                    ) {
                        setFreshStart(false);
                        dispatch(addItem(item));
                        toast.success('Added to the cart');
                    } else {
                        setFreshStart(true);
                    }
                }
            } else {
                dispatch(addItem(item));
                toast.success('Added to the cart');
            }
        }
    };

    const freshStartCart = (resData) => {
        dispatch(clearRestaurant());
        dispatch(clearCart());
        dispatch(addRestaurant(resData));
        setFreshStart(false);
    };

    return (
        <>
            {items.map((item) => {
                return (
                    <div
                        key={item?.card?.info?.id}
                        className="border-b-1 md:border-b-2 border-gray-300 pt-2 md:pt-4 pb-4 md:pb-5 px-4 md:px-8 flex justify-between"
                    >
                        <div className="overflow-hidden w-4/5">
                            <p>
                                {item?.card?.info?.itemAttribute
                                    ?.vegClassifier === 'VEG' ? (
                                    <span className="border-1 md:border-2 border-green-500 pb-[0.4px] p-[1px] md:pb-[0.7px] rounded text-[8px]  md:text-xs">
                                        🟢
                                    </span>
                                ) : (
                                    <span className="border-1 md:border-2 border-red-500 pb-[0.4px] p-[1px]  md:pb-[0.7px] rounded text-[8px]  md:text-xs">
                                        🔴
                                    </span>
                                )}
                                {item.card.info.ribbon.text !== undefined && (
                                    <span className="text-orange-500 text-xs md:text-sm md:font-medium mx-1 md:mx-2">
                                        {item?.card?.info?.ribbon?.text}
                                    </span>
                                )}
                            </p>

                            <p className="text-md md:text-lg font-semibold md:font-bold mt-1 md:mt-2 mb-1 leading-4 md:leading-6  mr-2">
                                {item?.card?.info?.name}
                            </p>
                            <p className="text-sm font-semibold md:text-md md:font-bold">
                                &#8377;&nbsp;
                                {item?.card?.info?.defaultPrice / 100 ||
                                    item?.card?.info?.price / 100}
                            </p>
                            {item?.card?.info?.ratings?.aggregatedRating
                                ?.rating != undefined && (
                                <p className="my-2 flex gap-2 text-sm">
                                    <span className="text-green-700  font-semibold md:font-bold flex items-center">
                                        <Star /> &nbsp;
                                        {
                                            item?.card?.info?.ratings
                                                ?.aggregatedRating?.rating
                                        }
                                    </span>
                                    (
                                    {
                                        item?.card?.info?.ratings
                                            ?.aggregatedRating?.ratingCountV2
                                    }
                                    )
                                </p>
                            )}
                            <p className="text-sm md:text-md md:font-medium mr-1 md:mr-6 leading-4 md:leading-5 text-gray-600 cursor-pointer  ">
                                {item?.card?.info?.description?.length > 100
                                    ? item?.card?.info?.description?.slice(
                                          0,
                                          96
                                      ) + '...'
                                    : item?.card?.info?.description}
                            </p>
                        </div>

                        <div className="flex items-end justify-center  relative my-8">
                            <img
                                className="w-28 md:w-48 md:h-34 object-cover cursor-pointer rounded-md md:rounded-xl shadow-xl border-[1px]"
                                src={
                                    item?.card?.info?.imageId === undefined
                                        ? DUMMY_IMG
                                        : RES_MENU_IMG +
                                          item?.card?.info?.imageId
                                }
                            />

                            <button
                                className="font-bold border-[1px] border-gray-300 bg-white px-2 md:px-6 md:py-2 py-1 md:rounded-lg rounded-md text-sm md:text-md  md:font-extrabold text-green-600 mx-auto absolute -bottom-4 z-1 shadow-md cursor-pointer"
                                onClick={() => {
                                    handleAddItem(item);
                                }}
                            >
                                ADD
                            </button>
                        </div>
                    </div>
                );
            })}
            <div
                className=" w-10/12 md:w-6/12 md:p-6 px-4 py-3 bg-white  shadow-lg mx-auto  fixed md:bottom-20 md:left-[25%] bottom-15 left-[9%]  duration-1000 z-99 cursor-default animate__animated animate__fadeInUp"
                style={{ display: freshStart ? 'block' : 'none' }}
            >
                <h2 className="text-xl pb-2 font-bold">
                    Items already in cart
                </h2>
                <p className="text-sm pb-2 text-gray-600">
                    Your cart contains items from other restaurant. Would you
                    like to reset your cart for adding items from this
                    restaurant?
                </p>
                <div className="flex md:space-x-10 space-x-6 justify-center  my-4 ">
                    <button
                        className="border-2 border-green-400 py-2 md:w-42 w-36  font-semibold hover:cursor-pointer "
                        onClick={() => {
                            setFreshStart(false);
                        }}
                    >
                        No
                    </button>
                    <button
                        className="border-2 border-green-400 px-2 bg-green-400 md:w-42 w-36 font-semibold text-white hover:cursor-pointer uppercase"
                        onClick={() => {
                            freshStartCart(resData);
                            setFreshStart(false);
                        }}
                    >
                        Yes, start a Fresh
                    </button>
                </div>
            </div>
        </>
    );
};

export default ItemList;
