import { useDispatch } from 'react-redux';
import { RES_MENU_IMG } from '../../utils/constants';
import { addItem } from '../../utils/cartSlice';
import toast from 'react-hot-toast';

const ItemList = ({ items }) => {
    // console.log('items', items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        toast.success('Added to the cart');
    };

    return (
        <>
            {items.map((item) => {
                return (
                    <div
                        key={item.card.info.id}
                        className="border-b-2 border-gray-300 pt-4 pb-8 px-3 flex justify-between"
                    >
                        <div className="overflow-hidden w-4/5">
                            <p>
                                {item.card.info.itemAttribute.vegClassifier ===
                                'VEG' ? (
                                    <span className="border-2 border-green-500 pb-[0.7px] rounded text-xs">
                                        🟢
                                    </span>
                                ) : (
                                    <span className="border-2 border-red-500 pb-[0.7px] rounded text-xs">
                                        🔴
                                    </span>
                                )}
                                {item.card.info.ribbon.text !== undefined && (
                                    <span className="text-orange-500 font-medium mx-2">
                                        {item.card.info.ribbon.text}
                                    </span>
                                )}
                            </p>

                            <p className="text-lg font-bold mt-2 mb-1 leading-6">
                                {item.card.info.name}
                            </p>
                            <p className="text-md font-bold">
                                &#8377;&nbsp;
                                {item.card.info.defaultPrice / 100 ||
                                    item.card.info.price / 100}
                            </p>
                            {item.card.info.ratings.aggregatedRating.rating !=
                                undefined && (
                                <p className="my-2">
                                    <span className="text-green-700 font-bold">
                                        &#9733; &nbsp;
                                        {
                                            item.card.info.ratings
                                                .aggregatedRating.rating
                                        }
                                    </span>
                                    (
                                    {
                                        item.card.info.ratings.aggregatedRating
                                            .ratingCountV2
                                    }
                                    )
                                </p>
                            )}
                            <p className="text-md font-medium mr-6 leading-5 text-gray-600 cursor-pointer">
                                {item.card.info.description}
                            </p>
                        </div>

                        <div className="flex items-end justify-center  relative my-8">
                            <img
                                className="w-48 h-44 object-cover cursor-pointer rounded-xl shadow-xl border-[1px]"
                                src={RES_MENU_IMG + item.card.info.imageId}
                            />
                            <button
                                className="border-[1px] border-gray-300 bg-white px-6 py-2 rounded-lg text-md font-extrabold text-green-600 mx-auto absolute -bottom-5 z-1 shadow-md cursor-pointer"
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
        </>
    );
};

export default ItemList;
