import RestaurantCard from '../RestaurantCard';
import { Link } from 'react-router';

const OnlineDelivery = ({ onlineRestaurant, onlineRestaurantTitle }) => {
    return (
        <>
            <div className="w-[95%] md:w-[80%] mx-auto  my-2 md:my-7">
                <div className="text-md md:text-3xl font-bold text-center mb-5 md:mb-10">
                    {onlineRestaurantTitle}
                </div>

                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2
                gap-10 sm:grid-cols-1 place-items-center ">
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
