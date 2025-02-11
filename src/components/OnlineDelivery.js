import { RES_API } from '../../utils/constants';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import {Link} from 'react-router'

const OnlineDelivery = () => {
    const [title, setTitle] = useState('');
    const [onlineRestaurant, setOnlineRestaurant] = useState([]);

    useEffect(() => {
        fetchOnlineRestaurant();
    }, []);

    const fetchOnlineRestaurant = async () => {
        const response = await fetch(
            'https://food-app-cors.vercel.app/api/proxy/swiggy/dapi' + RES_API
        );
        const json = await response.json();
        const data = json.data.cards[4].card.card;

        console.log(data);

        setTitle(json.data.cards[2].card.card.title);
        setOnlineRestaurant(data?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
        <>
            <div className="max-w-[1100] mx-auto my-10">
                <div className="text-3xl font-bold text-center mb-10">{title}</div>

                <div className="grid grid-cols-4 gap-10">
                    {onlineRestaurant.map((restaurant) => {
                        return (
                            <Link
                            to={'/restaurant/' + restaurant.info.id}
                            key={restaurant?.info?.id}
                        >
                            <RestaurantCard
                                key={restaurant?.info?.id}
                                resdata={restaurant}
                            />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default OnlineDelivery;
