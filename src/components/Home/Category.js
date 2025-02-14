import { useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { IMG_CAROUSEL } from '../../../utils/constants';
const Category = ({ categoryTitle, categoryData }) => {
    const [slide, setSlide] = useState(0);

    const handleNext = () => {
        if (slide < categoryData?.length - 7) {
            setSlide(slide + 2);
        }
    };
    const handlePrevious = () => {
        if (slide > 0) {
            setSlide(slide - 2);
        }
    };

    return (
        <>
            {categoryData && categoryData?.length !== 0 && (
                <div className="w-[95%] md:w-[75%] mx-auto">
                    <div className="flex justify-between items-center  my-2 md:my-5">
                        <div className="text-md md:text-2xl font-bold">
                            {categoryTitle}
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
                    <div className="flex  overflow-hidden  gap-x-1 md:gap-x-4">
                        {categoryData &&
                            categoryData.map((category) => {
                                return (
                                    <div
                                        key={category.id}
                                        className="w-[50px] md:w-[150px]   shrink-0 duration-500 cursor-pointer"
                                        style={{
                                            transform: `translateX(${
                                                slide * -90
                                            }%)`,
                                        }}
                                    >
                                        <img
                                            src={`${IMG_CAROUSEL}${category.imageId}`}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                    <hr className="my-3 md:my-6 border-1 border-[#ccc] " />
                </div>
            )}
        </>
    );
};

export default Category;
