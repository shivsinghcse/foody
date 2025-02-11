import { useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { CDN_URL } from '../../../utils/constants';
const Category = ({ categoryTitle, categoryData }) => {
    const [slide, setSlide] = useState(0);

    const handleNext = () => {
        if (slide < 15) {
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
            <div className="max-w-[1100] mx-auto">
                <div className="flex justify-between items-center  my-3">
                    <div className="text-2xl font-bold">{categoryTitle}</div>
                    <div className="flex gap-2">
                        <button onClick={handlePrevious}>
                            <div className="h-[30px] w-[30px] bg-[#02060c26] rounded-full flex justify-center items-center cursor-pointer">
                                <BsArrowLeftShort fontSize={'24px'} />
                            </div>
                        </button>
                        <button onClick={handleNext}>
                            <div className="h-[30px] w-[30px] bg-[#02060c26] rounded-full flex justify-center items-center cursor-pointer">
                                <BsArrowRightShort fontSize={'24px'} />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex  overflow-hidden  gap-x-4">
                    {categoryData.map((category) => {
                        return (
                            <div
                                key={category.id}
                                className="w-[150px] shrink-0 duration-500 cursor-pointer"
                                style={{
                                    transform: `translateX(${slide * -100}%)`,
                                }}
                            >
                                <img src={`${CDN_URL}${category.imageId}`} />
                            </div>
                        );
                    })}
                </div>
                <hr className="my-6 border-1 border-[#ccc] " />
            </div>
        </>
    );
};

export default Category;
