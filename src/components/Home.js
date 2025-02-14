import OnlineDelivery from './Home/OnlineDelivery';
import TopRestaurant from './Home/TopRestaurant';
import Category from './Home/Category';
import useRestaurant from '../../hooks/useRestaurant';

const Home = () => {
    const {
        topRestaurant,
        topRestaurantChainTitle,
        onlineRestaurant,
        onlineRestaurantTitle,
        categoryTitle,
        categoryData,
    } = useRestaurant();

    return (
        <>
            
                <Category
                    categoryTitle={categoryTitle}
                    categoryData={categoryData}
                />
                <TopRestaurant
                    topRestaurant={topRestaurant}
                    topRestaurantChainTitle={topRestaurantChainTitle}
                />
                <OnlineDelivery
                    onlineRestaurantTitle={onlineRestaurantTitle}
                    onlineRestaurant={onlineRestaurant}
                />
            
        </>
    );
};

export default Home;
