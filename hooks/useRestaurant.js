import { useEffect, useState } from 'react';
import { RES_API, VITE_URL } from '../utils/constants';

const useRestaurant = () => {
    const [topRestaurant, setTopRestaurant] = useState([]);
    const [topRestaurantChainTitle, setTopRestaurantChainTitle] = useState('');
    const [onlineRestaurant, setOnlineRestaurant] = useState([]);
    const [onlineRestaurantTitle, setOnlineRestaurantTitle] = useState('');

    const [categoryTitle, setCategoryTitle] = useState('');
    const [categoryData, setCategoryData] = useState([]);

    const data = [
        topRestaurant,
        topRestaurantChainTitle,
        onlineRestaurant,
        onlineRestaurantTitle,
        categoryTitle,
        categoryData,
    ];
    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    const fetchTopRestaurant = async () => {
        const response = await fetch(VITE_URL + RES_API);
        const json = await response.json();
        const data = json.data.cards;

        // console.log("main", data[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // console.log("main", data[0]?.card?.card?.gridElements?.infoWithStyle?.info);

        setCategoryTitle(data[0]?.card?.card?.header?.title);
        setCategoryData(data[0]?.card?.card?.gridElements?.infoWithStyle?.info);

        setTopRestaurantChainTitle(data[1]?.card?.card?.header?.title);
        setTopRestaurant(
            data[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        setOnlineRestaurantTitle(data[2]?.card?.card?.title);
        setOnlineRestaurant(
            data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    return data;
};

export default useRestaurant;
