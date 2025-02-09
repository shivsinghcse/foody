import { CDN_URL } from '../../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        avgRating,
        costForTwo,
        cuisines,
        areaName,
        cloudinaryImageId,
    } = resData?.info;

    return (
        <div className="rounded-xl  hover:scale-95 ease-in-out duration-500">
            <div
                className="w-60 h-40 bg-cover bg-center rounded-2xl"
                style={{
                    backgroundImage: `url(${CDN_URL + cloudinaryImageId})`,
                }}
            >
                {/* <img
                    className="res-logo w-60 h-40 object-cover rounded-2xl"
                    src={CDN_URL + cloudinaryImageId}
                    alt="res-logo"
                /> */}
            </div>
            <div className="res-details p-2 w-60">
                <h4 className="text-lg font-bold m-1 truncate">{name}</h4>
                <p className="text-md font-semibold text-black-500 truncate">
                    <span className="text-green-700">&#9733;</span>
                    {' ' + avgRating} | {resData.info.sla.slaString} |{' '}
                    {costForTwo}
                </p>
                <p className="truncate">{cuisines.join(', ')}</p>
                <p>{areaName}</p>
            </div>
        </div>
    );
};

// higher order components

export const withOfferedLabel = (RestaurantCard) => {
    return (props) => {
        // console.log(props);
        const { header, subHeader } =
            props.resData?.info.aggregatedDiscountInfoV3;
        return (
            <div className="relative ease-in-out duration-500">
                <div className=" absolute top-32 left-4 text-xl font-extrabold text-white hover:scale-95 z-10 shadow-2xl ease-in-out duration-500  bg-black opacity-100">
                    {header + ' ' + subHeader}
                </div>
                <RestaurantCard {...props} />
            </div>
        );
    };
};
export default RestaurantCard;
