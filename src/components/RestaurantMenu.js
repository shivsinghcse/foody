import { useState } from 'react';
import { useParams } from 'react-router';
import ItemCategory from './ItemCategory';
import useRestaurantMenu from '../../hooks/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(0);

    const { resData, category } = useRestaurantMenu(resId);

    if (resData === null) return <p></p>;
    const {
        name,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        cuisines,
        areaName,
        sla,
    } = resData;

    // console.log(category);

    return (
        <>
            {category && category?.length && (
                <div className=" flex flex-col gap-y-5 w-[90%] md:w-[75%] lg:w-[65%] mx-auto p-5 my-5">
                    <h1 className="font-sans  text-2xl font-extrabold">
                        {name}
                    </h1>
                    <section
                        className="res-details"
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            // height: '100px',
                            borderRadius: '0.8rem',
                            border: '1px solid #ccc',
                            boxShadow: ' rgba(0, 0, 0, 0.25) 0px 10px 10px 0px',
                            padding: '1rem',
                        }}
                    >
                        <h3 className="text-lg font-bold">
                            <span className="text-green-700">&#9733;</span>{' '}
                            {avgRating} ({totalRatingsString}) -{' '}
                            {costForTwoMessage}
                        </h3>
                        <h3 className="text-md font-semibold text-orange-600 underline cursor-pointer">
                            {cuisines.join(', ')}
                        </h3>
                        <div className="border-l-2 border-gray-400">
                            <h3 className="text-sm text-black font-semibold m-3">
                                Outlet{' '}
                                <span className="font-medium text-gray-400 mx-3">
                                    {areaName}
                                </span>
                            </h3>
                            <h3 className="text-sm text-black font-semibold m-3">
                                {sla.slaString.toLowerCase()}
                            </h3>
                        </div>
                    </section>
                    {/* TODO: Deals for you */}
                    <h4 className="text-md text-gray-400 font-medium tracking-[0.5rem] mx-auto my-2">
                        &larr;MENU&rarr;
                    </h4>
                    {/* TODO: search */}
                    {/* TODO: filters */}
                    {/* Accordino */}

                    {category.map((category, index) => {
                        return (
                            <ItemCategory
                                key={index}
                                data={category}
                                showItems={index === showIndex && true}
                                setShowIndex={() => setShowIndex(index)}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default RestaurantMenu;
