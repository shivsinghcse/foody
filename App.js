import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
import RestaurantCard from './src/Components/RestaurantCard';
// import './index.css';

const App = () => {
    const [resInfo, setResInfo] = useState([]);
    const [topBrandsInCity, setTopBrandsInCity] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            'https://food-app-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );

        const json = await data.json();
        setResInfo(json.data);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        const topRestaurants =
            json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setTopBrandsInCity(topRestaurants);
    };
    return (
        <>
            <Header />
            {topBrandsInCity.map((restaurant) => {
                return <RestaurantCard resData={restaurant} key={restaurant.info.id}/>;
            })}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
