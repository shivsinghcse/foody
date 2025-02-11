import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { CDN_URL } from '../../utils/constants';
import RestaurantCard from './RestaurantCard';

const TopRestaurant = () => {
    const [title, setTitle] = useState('');
    const [slide, setSlide] = useState(0);
    const [topRestaurant, setTopRestaurant] = useState([]);

    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    const fetchTopRestaurant = async () => {
        const response = await fetch(
            'https://food-app-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await response.json();
        const data = json.data.cards[1].card.card;

        console.log(json.data.cards);

        setTitle(data?.header?.title);
        setTopRestaurant(data?.gridElements?.infoWithStyle?.restaurants);
    };

    const handleNext = () => {
        if (slide < 16) {
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
                    <div className="text-2xl font-bold">{title}</div>
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
                <div className="flex gap-5 mt-10 overflow-hidden">
                    {topRestaurant.map((restaurant) => {
                        return (
                            <div
                                key={restaurant?.info?.id}
                                className="shrink-0 grow duration-500"
                                style={{
                                    transform: `translateX(${slide * -109}%)`,
                                }}
                            >
                                <RestaurantCard resdata={restaurant} />
                            </div>
                        );
                    })}
                </div>
                <hr className="my-6 border-1 border-[#ccc] " />
            </div>
        </>
    );
};

export default TopRestaurant;
