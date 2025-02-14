import { RES_CART_IMG } from '../../utils/constants';

const CartItemList = ({ items }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <div className="flex justify-between border-b-2 border-gray-300 items-center p-5">
                        <div className="flex items-start gap-5">
                            <div className="w-20 h-16 flex items-center">
                                <img
                                    className=" object-cover cursor-pointer rounded-xl shadow-xl"
                                    src={RES_CART_IMG + item.card.info.imageId}
                                />
                            </div>
                            <div className="flex gap-2 items-center">
                                <p>
                                    {item.card.info.itemAttribute
                                        .vegClassifier === 'VEG' ? (
                                        <span className="border-2 border-green-500 pb-[0.7px] rounded text-xs">
                                            🟢
                                        </span>
                                    ) : (
                                        <span className="border-2 border-red-500 pb-[0.7px] rounded text-xs">
                                            🔴
                                        </span>
                                    )}
                                </p>
                                <p className="text-lg font-bold mt-2 mb-1 leading-6  w-[70%]">
                                    {item.card.info.name}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center ">
                            <button className="text-white text-xl bg-black font-bold py-1 px-2 rounded-md cursor-pointer">
                                -
                            </button>
                            <span className="font-bold py-1 px-2">1</span>
                            <button className="text-white bg-black text-xl font-bold py-1 px-2 rounded-md cursor-pointer">
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
