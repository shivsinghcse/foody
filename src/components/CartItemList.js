import { RES_CART_IMG } from '../../utils/constants';

const CartItemList = ({ items }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <div className="w-[100%] flex justify-between border-b-1 md:border-b-2 border-gray-300 items-center p-1 md:p-5">
                        <div className="flex items-start gap-1 md:gap-5">
                            <div className="w-16 h-16 flex items-center">
                                <img
                                    className=" object-cover cursor-pointer rounded-xl shadow-xl"
                                    src={RES_CART_IMG + item.card.info.imageId}
                                />
                            </div>
                            <div className="flex flex-col  ">
                                <p>
                                    {item.card.info.itemAttribute
                                        .vegClassifier === 'VEG' ? (
                                        <span className="border-1 md:border-2 border-green-500 p-[1px] md:pb-[0.7px] rounded text-[5px]">
                                            🟢
                                        </span>
                                    ) : (
                                        <span className="border-1 md:border-2 border-red-500 p-[1px] md:pb-[0.7px] rounded text-[5px] md:text-xs">
                                            🔴
                                        </span>
                                    )}
                                </p>
                                <p className="text-[14px] md:text-lg font-semibold md:font-bold mt-2 mb-1 leading-5  w-[70%]">
                                    {item.card.info.name}
                                </p>
                                <p>₹{item.card.info.price / 100}</p>
                            </div>
                        </div>
                        <div className="flex items-center ">
                            <button className="text-white text-md bg-black font-semibold py-1 px-2 rounded-md cursor-pointer">
                                -
                            </button>
                            <span className="font-semibold py-1 px-2">1</span>
                            <button className="text-white bg-black text-md font-semibold py-1 px-2 rounded-md cursor-pointer">
                                +
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CartItemList;
