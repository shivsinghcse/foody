import { useState } from 'react';
import { DUMMY_IMG, RES_CART_IMG } from '../../utils/constants';
import { useSelector } from 'react-redux';

const CartItemList = ({ items }) => {
    // const [quantity, setQuantity] = useState(1);
    // console.log(items);

    return (
        <>
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="w-[100%]  flex justify-between border-b-1 md:border-b-2 border-gray-300   md:px-5 md:py-1"
                    >
                        <div className="flex items-start gap-1 md:gap-5">
                            {/* <div className="w-16 h-16 flex items-center">
                                <img
                                    className=" object-cover cursor-pointer rounded-xl shadow-xl"
                                    src={
                                        item.card.info.imageId === undefined
                                            ? DUMMY_IMG
                                            : RES_CART_IMG +
                                              item.card.info.imageId
                                    }
                                />
                            </div> */}
                            <div className="flex space-x-1  px-1 md:px-2">
                                <p>
                                    {item.card.info.itemAttribute
                                        .vegClassifier === 'VEG' ? (
                                        <span className="border-1 md:border-2 border-green-500 p-[1px]  md:pb-[0.7px] rounded text-[5px]">
                                            🟢
                                        </span>
                                    ) : (
                                        <span className="border-1 md:border-2 border-red-500 p-[1px] pb-[0.4px] md:pb-[0.7px] rounded text-[5px] md:text-xs">
                                            🔴
                                        </span>
                                    )}
                                </p>
                                <p className="text-[14px] md:text-lg font-medium md:font-bold md:mt-2 mt-1 mb-1 leading-5 ">
                                    {item.card.info.name}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-2 gap-1">
                            <div className="flex items-center border border-gray-300">
                                <button className=" text-md  bg-gray-100 hover:bg-gray-200  font-semibold py-1 px-2  cursor-pointer">
                                    -
                                </button>
                                <span className="font-semibold bg-wgite py-1 px-2">
                                    1
                                </span>
                                <button
                                    className=" text-md bg-gray-100 hover:bg-gray-200  font-semibold py-1 px-2  cursor-pointer"
                                    onClick={() => alert()}
                                >
                                    +
                                </button>
                            </div>
                            <p>
                                ₹
                                {item?.card?.info?.price === undefined
                                    ? item?.card?.info?.defaultPrice / 100
                                    : item?.card?.info?.price / 100}
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CartItemList;
