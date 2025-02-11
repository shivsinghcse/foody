import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';

const OnlineDelivery = () => {
    // const [title, setTitle] = useState('');
    const [onlineRestaurant, setOnlineRestaurant] = useState([]);

    useEffect(() => {
        fetchOnlineRestaurant();
    }, []);

    const fetchOnlineRestaurant = async () => {
        const response = await fetch(
            'https://food-app-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await response.json();
        const data = json.data.cards[4].card.card;

        console.log(data?.gridElements?.infoWithStyle?.restaurants);

        // setTitle(data?.header?.title);
        setOnlineRestaurant(data?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
        <>
            <div className="max-w-[1100] mx-auto my-10">
                <div className="text-3xl font-bold text-center mb-10">Restaurants with online food delivery in Lucknow</div>

                <div className="grid grid-cols-4 gap-10">
                    {onlineRestaurant.map((restaurant) => {
                        return (
                            <RestaurantCard
                                key={restaurant?.info?.id}
                                resdata={restaurant}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default OnlineDelivery;
