import { useState } from 'react';
import ItemList from './ItemList';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const ItemCategory = ({ data, showItems, setShowIndex }) => {
    // console.log('data', data);
    const { title, itemCards } = data.card.card;
    const [showItem, setShowItem] = useState(false);

    // console.log(data);
    

    const handleClick = () => {
        setShowIndex();
        setShowItem(!showItem);
    };

    return (
        <>
            <div
                id={title}
                className="w-full mx-auto hover:cursor-pointer shadow-lg border-t-1  border-gray-300"
            >
                {/* Header */}
                <div
                    className="w-full py-2 px-3 flex justify-between "
                    onClick={handleClick}
                >
                    <h3 className="md:text-xl font-semibold md:font-bold">
                        
                        {`${title}(${itemCards.length})`}
                    </h3>
                    <span className="md:text-xl">
                        {showItem ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                </div>

                {/* body */}

                {showItem && <ItemList items={itemCards} />}
            </div>
        </>
    );
};

export default ItemCategory;
