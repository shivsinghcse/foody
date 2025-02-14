import RestaurantCard from '../RestaurantCard';
import { Link } from 'react-router';

const OnlineDelivery = ({ onlineRestaurant, onlineRestaurantTitle }) => {
    return (
        <>
            <div className="w-[95%] md:w-[75%] mx-auto  my-2 md:my-7">
                <div className="text-md md:text-3xl font-bold text-center mb-5 md:mb-10">
                    {onlineRestaurantTitle}
                </div>

                <div
                    className="flex flex-wrap justify-center gap-5"
                >
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
