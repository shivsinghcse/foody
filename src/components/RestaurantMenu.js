import { useState } from 'react';
import { useParams } from 'react-router';
import ItemCategory from './ItemCategory';
import useRestaurantMenu from '../../hooks/useRestaurantMenu';
import Star from './Star';

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

    // console.log(resData);

    return (
        <>
            {category && category?.length && (
                <div className=" flex flex-col gap-y-2 md:gap-y-5 md:w-[75%] lg:w-[65%] mx-auto p-2 md:p-5 my-2">
                    <h1 className="font-sans my-4  text-xl md:text-2xl font-bold md:font-extrabold p-2">
                        {name}
                    </h1>
                    <section
                        className="bg-white w-full p-4 rounded-lg border-1 border-gray-400 mb-2"
                        style={{
                            boxShadow: ' rgba(0, 0, 0, 0.25) 0px 10px 10px 0px',
                        }}
                    >
                        <h3 className="text-md font-semibold md:text-lg md:font-bold flex items-center gap-2">
                            <Star />
                            {avgRating} ({totalRatingsString}) -{' '}
                            {costForTwoMessage}
                        </h3>
                        <h3 className="text-sm md:text-md font-medium md:font-semibold text-orange-600 underline cursor-pointer">
                            {cuisines.join(', ')}
                        </h3>
                        <div className="border-l-2 border-gray-400">
                            <h3 className="text-sm text-black font-medium md:font-semibold m-2 md:m-3">
                                Outlet{' '}
                                <span className="font-medium text-gray-400 mx-3">
                                    {areaName}
                                </span>
                            </h3>
                            <h3 className="text-sm text-black font-medium md:font-semibold m-2 md:m-3">
                                {sla?.slaString?.toLowerCase()}
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
                                resData={resData}
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
