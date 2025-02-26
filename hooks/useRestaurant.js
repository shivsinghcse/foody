import { useEffect, useState } from 'react';
import { VITE_URL } from '../utils/constants';
import { useSelector } from 'react-redux';

const useRestaurant = () => {
    const [topRestaurant, setTopRestaurant] = useState([]);
    const [topRestaurantChainTitle, setTopRestaurantChainTitle] = useState('');

    const [onlineRestaurant, setOnlineRestaurant] = useState([]);
    const [onlineRestaurantTitle, setOnlineRestaurantTitle] = useState('');

    const [categoryTitle, setCategoryTitle] = useState('');
    const [categoryData, setCategoryData] = useState([]);

    const userLocation = useSelector((store) => store.location.userLocation);
    // console.log('location', userLocation);
    const lat = userLocation?.lat ? userLocation?.lat : 26.8466937;
    const lng = userLocation?.lng ? userLocation?.lng : 80.94616599999999;

    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    const fetchTopRestaurant = async () => {
        const response = await fetch(
            VITE_URL +
                `/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        const json = await response.json();

        // console.log('main', json.data.cards);

        const imageCarousal = json?.data?.cards?.find((a) =>
            a?.card?.card?.id?.includes('mind')
        )?.card?.card?.gridElements?.infoWithStyle?.info;

        const imageCarousalTitle = json?.data?.cards?.find((a) =>
            a?.card?.card?.id?.includes('mind')
        )?.card?.card?.header?.title;

        const restaurant = json?.data?.cards?.find((a) =>
            a?.card?.card?.id?.includes('restaurant_grid')
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const restaurantTitle = json?.data?.cards?.find((a) =>
            a?.card?.card?.id?.includes('restaurants_title')
        )?.card?.card?.title;

        const topChain = json?.data?.cards?.find((a) =>
            a?.card?.card?.id?.includes('top_brands')
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const topChainTitle = json?.data?.cards?.find((a) =>
            a?.card?.card?.id?.includes('top_brands')
        )?.card?.card?.header?.title;

        setCategoryTitle(imageCarousalTitle);
        setCategoryData(imageCarousal);

        setTopRestaurantChainTitle(topChainTitle);
        setTopRestaurant(topChain);

        setOnlineRestaurantTitle(restaurantTitle);
        setOnlineRestaurant(restaurant);
    };

    return {
        categoryData,
        topRestaurant,
        categoryTitle,
        onlineRestaurant,
        topRestaurantChainTitle,
        onlineRestaurantTitle,
    };
};

export default useRestaurant;
