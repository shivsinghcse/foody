// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
// import { useEffect, useState } from 'react';

// const TopRestaurant = () => {
//     const [title, setTitle] = useState('');
//     const [topRestaurant, setTopRestaurant] = useState([]);

//     useEffect(() => {
//         fetchTopRestaurant();
//     }, []);

//     const fetchTopRestaurant = async () => {
//         const response = await fetch(
//             'https://food-app-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
//         );
//         const json = await response.json();
//         const data = json.data.cards[1].card.card;

//         console.log(data);

//         // setTitle(data?.header?.title);
//         // setTopRestaurant(data?.imageGridCards?.info);
//     };

//     const handleNext = () => {};
//     const handlePrevious = () => {};
//     return (
//         <>
//             <div className="max-w-[1100] mx-auto">
//                 <div className="flex justify-between items-center  my-3">
//                     <div className="text-2xl font-bold pl-5">
//                         Top Restaurant in Lucknow
//                     </div>
//                     <div className="flex gap-2">
//                         <button onClick={handlePrevious}>
//                             <div className="h-[30px] w-[30px] bg-[#02060c26] rounded-full flex justify-center items-center cursor-pointer">
//                                 <BsArrowLeftShort fontSize={'24px'} />
//                             </div>
//                         </button>
//                         <button onClick={handleNext}>
//                             <div className="h-[30px] w-[30px] bg-[#02060c26] rounded-full flex justify-center items-center cursor-pointer">
//                                 <BsArrowRightShort fontSize={'24px'} />
//                             </div>
//                         </button>
//                     </div>
//                 </div>
//                 <hr className='my-6 border-1 border-[#ccc] '/>
//             </div>
//         </>
//     );
// };

// export default TopRestaurant;
