import { RxCaretDown, RxCross2 } from 'react-icons/rx';
import { FiUser } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { LOGO_URL } from '../../utils/constants';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import ShopingBag from './ShopingBag';
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [location, setLocation] = useState('');

    const showSideMenu = () => {
        setToggle(true);
    };
    const hideSideMenu = () => {
        setToggle(false);
    };

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    const handelInput = () => {
        const fetchlocation = async () => {
            const data = await fetch();
        };
    };

    return (
        <>
            {/* location drawer */}
            <div
                className="black-overlay h-full w-full fixed duration-500 z-55 "
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? 'visible' : 'hidden',
                }}
            >
                <div
                    className="bg-white w-full md:w-[50vw] lg:w-[35vw] h-full absolute duration-[400ms]"
                    style={{
                        left: toggle ? '0%' : '-100%',
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <RxCross2
                        className="font-extrabold absolute top-[5%] left-[10%] text-[24px] cursor-pointer border-1 rounded-full"
                        onClick={hideSideMenu}
                    />
                    <div className=" w-[70%]  mx-auto absolute top-[15%] left-[15%]">
                        <form onSubmit={handelInput}>
                            <input
                                type="text"
                                placeholder="Search for area, street name.."
                                className="w-full border-1 p-2"
                                value={location}
                                onChange={(e) => {
                                    setLocation(e.target.value);
                                }}
                            />
                        </form>
                    </div>
                </div>
            </div>
            {/* header  */}
            <header className="p-3 shadow-xl bg-white sticky top-0 left-0 z-50">
                <div className="w-full md:w-[85%] xl:w-[80%] mx-auto  flex items-center overflow-hidden">
                    <Link to="/">
                        <div className="w-10 md:w-14">
                            <img
                                src={LOGO_URL}
                                alt="logo"
                                className="w-full rounded-full border-1"
                            />
                        </div>
                    </Link>
                    <div
                        className="ml-2 md:ml-5 text-[#686b78] z-[999] text-[8px] md:text-[16px]"
                        onClick={showSideMenu}
                    >
                        <span className="font-semibold border-b-1  mx-[3px] md:font-bold md:border-b-2 md:mx-[5px] hover:text-[#ff5200] hover:cursor-pointer">
                            {' '}
                            Other
                        </span>
                        <span className="cursor-pointer">
                            Lucknow, Uttar Pradesh, India
                        </span>
                        <RxCaretDown className="inline text-[#ff5200] text-[1rem] md:text-[1.7rem] font-extrabold hover:cursor-pointer" />
                    </div>
                    <nav className="f ml-auto  text-[10px] md:text-[18px] font-semibold mr-2 md:mr-5 text-[#3d4152]">
                        <ul className="flex  list-none gap-2 md:gap-5">
                            <li className="hover:text-[#ff5200] hover:cursor-pointer ">
                                <Link
                                    to=""
                                    className="flex items-center gap-1 md:gap-2"
                                >
                                    <FiUser />
                                    Sign In
                                </Link>
                            </li>
                            
                                <Link
                                    to="/cart"
                                    className="flex items-center gap-1 md:gap-2 hover:text-[#ff5200] hover:cursor-pointer"
                                >
                                 
                                    {cartItems.length > 0 ? (
                                        <div className="relative flex justify-center items-center">
                                            <ShopingBag className="stroke-[#1ba672] fill-[#1ba672]" />
                                            <span className="absolute text-[12px] text-white">
                                                {cartItems.length}
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="relative flex justify-center items-center ">
                                            <ShopingBag className="stroke-[#282c3f] fill-white stroke-2 hover:stroke-[#FF5200] " />
                                            <span className="absolute text-[12px] text-black hover:text-[#ff5200]">
                                                {cartItems.length}
                                            </span>
                                        </div>
                                    )}
                                    Cart
                                </Link>
                           
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
