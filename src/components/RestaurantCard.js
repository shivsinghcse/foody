import { RES_IMG } from '../../utils/constants';
import { BsDot } from 'react-icons/bs';
import Star from './Star';
const RestaurantCard = ({ resdata }) => {
    // console.log("resdata", resdata);

    const {
        name,
        areaName,
        avgRatingString,
        cuisines,
        cloudinaryImageId,
        sla,
    } = resdata.info;

    const { header, subHeader } = resdata?.info?.aggregatedDiscountInfoV3 || {};

    return (
        <>
            <div className="hover:scale-95 duration-300">
                <div className="w-73 h-56 overflow-hidden rounded-[1rem] relative">
                    <img
                        src={RES_IMG + cloudinaryImageId}
                        className=" object-cover rounded-[1rem] "
                        alt=""
                    />

                    <div className="image-overlay absolute top-0 w-full h-full">
                        {header && (
                            <p className="text-xl text-white font-bold bottom-0 absolute p-2 tracking-tighter">
                                {header + ' ' + subHeader}
                            </p>
                        )}
                    </div>
                </div>
                <div className="p-3">
                    <h2 className="text-lg font-bold truncate">{name.length > 30 ? name.slice(0, 26)+'...': name}</h2>
                    <div className="flex items-center gap-1">
                        <Star className="inline" />
                        <div>
                            <span className="inline">{avgRatingString}</span>
                            <BsDot className="inline" />
                            <span className="font-semibold">
                                {sla.slaString}
                            </span>
                        </div>
                    </div>
                    <p className="truncate">{cuisines.join().length > 30 ?cuisines.join(', ').slice(0, 30)+'...' : cuisines.join(', ')}</p>
                    <p>{areaName}</p>
                </div>
            </div>
        </>
    );
};

// export const WithOfferLabelRestaurantCard = (RestaurantCard) => {
//     return (props) => {
//         const { header, subHeader } =
//             resdata?.info?.aggregatedDiscountInfoV3 || {};

//         return (
//             <div className="relative">
//                 {header && (
//                     <p className="text-3xl text-red-500 absolute top-10 border-8">
//                         {header} {subHeader}
//                     </p>
//                 )}
//                 <RestaurantCard {...props} />
//             </div>
//         );
//     };
// };

export default RestaurantCard;
