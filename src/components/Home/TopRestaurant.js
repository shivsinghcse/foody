import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useState } from 'react';
import RestaurantCard from '../RestaurantCard';
import { Link } from 'react-router';

const TopRestaurant = ({ topRestaurant, topRestaurantChainTitle }) => {
    const [slide, setSlide] = useState(0);

    const handleNext = () => {
        if (slide < topRestaurant?.length - 4) {
            setSlide(slide + 1);
        }
    };
    const handlePrevious = () => {
        if (slide > 0) {
            setSlide(slide - 1);
        }
    };

    return (
        <>
            {topRestaurant && topRestaurant?.length !== 0 && (
                <div className="w-[95%] md:w-[75%] mx-auto">
                    <div className="flex justify-between items-center  my-1 md:my-3">
                        <div className="text-md md:text-3xl font-bold">
                            {topRestaurantChainTitle}
                        </div>
                        <div className="flex gap-1 md:gap-2">
                            <button onClick={handlePrevious}>
                                <div className="h-[20px] w-[20px] md:h-[30px] md:w-[30px] bg-[#02060c26] rounded-full flex justify-center items-center cursor-pointer">
                                    <BsArrowLeftShort fontSize={'24px'} />
                                </div>
                            </button>
                            <button onClick={handleNext}>
                                <div className="h-[20px] w-[20px] md:h-[30px] md:w-[30px] bg-[#02060c26] rounded-full flex justify-center items-center cursor-pointer">
                                    <BsArrowRightShort fontSize={'24px'} />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-5 md:mt-10 overflow-hidden">
                        {topRestaurant &&
                            topRestaurant.map((restaurant) => {
                                return (
                                    <Link
                                        to={'/restaurant/' + restaurant.info.id}
                                        key={restaurant?.info?.id}
                                    >
                                        <div
                                            className="shrink-0 grow duration-500"
                                            style={{
                                                transform: `translateX(${
                                                    slide * -100
                                                }%)`,
                                            }}
                                        >
                                            <RestaurantCard
                                                key={restaurant.info.id}
                                                resdata={restaurant}
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                    <hr className="my-3 md:my-6 border-1 border-[#ccc] " />
                </div>
            )}
        </>
    );
};

export default TopRestaurant;
