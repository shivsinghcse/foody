import RestaurantCard from '../RestaurantCard';
import { Link } from 'react-router';

const OnlineDelivery = ({ onlineRestaurant, onlineRestaurantTitle }) => {
    return (
        <>
            <div className="max-w-[1100] mx-auto my-10">
                <div className="text-3xl font-bold text-center mb-10">
                    {onlineRestaurantTitle}
                </div>

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
