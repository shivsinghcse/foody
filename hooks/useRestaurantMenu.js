import { useState, useEffect } from 'react';
import { VITE_URL, MENU_API } from '../utils/constants';
const useRestaurantMenu = (resId) => {
    // console.log("resId:",resId);

    const [resData, setResData] = useState(null);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetchResData();
    }, []);

    const fetchResData = async () => {
        const url = `${VITE_URL}${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`;
        const response = await fetch(url);
        const json = await response.json();

        const resInfo = json?.data?.cards?.find(
            (x) =>
                x?.card?.card?.['@type'] ===
                'type.googleapis.com/swiggy.presentation.food.v2.Restaurant'
        )?.card?.card?.info;

        const categories = json?.data?.cards
            ?.find((card) => card?.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => {
                return (
                    card?.card?.card?.['@type'] ===
                    'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
                );
            });

        // console.log('res:', json?.data);

        setResData(resInfo);
        setCategory(categories);
    };

    return { resData, category };
};

export default useRestaurantMenu;
