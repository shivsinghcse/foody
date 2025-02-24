import { RxCaretDown, RxCross2 } from 'react-icons/rx';
import { FiUser } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { LOGIN_IMG, LOGO_URL } from '../../utils/constants';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import ShopingBag from './ShopingBag';
import { RxCross2 } from 'react-icons/rx';
import firebaseAppConfig from '../../utils/firebaseConfig';
import { CiLocationOn } from 'react-icons/ci';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

const auth = getAuth(firebaseAppConfig);
const googleProvider = new GoogleAuthProvider();

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [location, setLocation] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log('loged in');
                setIsOpen(false);
                setIsLoggedIn(user);
            } else {
                // console.log('not loged in');
                setIsLoggedIn(false);
                setIsOpen(false);
            }
        });
    }, []);

    const showSideMenu = () => {
        setToggle(true);
    };
    const hideSideMenu = () => {
        setToggle(false);
    };
    const showSignMenu = () => {
        setIsOpen(true);
    };
    const hideSignMenu = () => {
        setIsOpen(false);
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.log(err);
        }
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
                    className="bg-white w-full md:w-[50vw] lg:w-[35vw] h-full absolute duration-[400ms] "
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
            {/* login drawer */}
            <div
                className="h-full w-full black-overlay fixed z-55 flex  duration-600 overflow-hidden"
                style={{
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? 'visible' : 'hidden',
                }}
            >
                <div
                    className="h-full w-full md:w-4/12 bg-white absolute duration-600"
                    style={{
                        right: isOpen ? '0%' : '-100%',
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="w-9/12 mx-auto  flex flex-col py-8 gap-4">
                        <button className=" w-8 h-8 border-2 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-[#ff5200] hover:text-white duration-300">
                            <RxCross2
                                className="text-2xl font-semibold "
                                onClick={hideSignMenu}
                            />
                        </button>
                        {isLoggedIn ? (
                            <h1 className="text-3xl font-semibold">
                                Welcome User
                            </h1>
                        ) : (
                            <div className="flex justify-between items-center">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-semibold">
                                        Login
                                    </h1>
                                    <p>
                                        and{' '}
                                        <span className="text-[#ff5200] font-semibold">
                                            Enjoy your time
                                        </span>
                                    </p>
                                </div>
                                <div className="w-28">
                                    <img
                                        src={LOGIN_IMG}
                                        alt="login-image"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        )}
                        <div className="space-y-2">
                            <button
                                className="bg-[#ff5200] text-white text-md py-4 uppercase font-semibold tracking-tighter hover:cursor-pointer w-full"
                                onClick={
                                    isLoggedIn
                                        ? () => signOut(auth)
                                        : signInWithGoogle
                                }
                            >
                                {isLoggedIn ? (
                                    <span>Logout</span>
                                ) : (
                                    <>Login with google</>
                                )}
                            </button>

                            <p className="text-sm text-gray-600">
                                {isLoggedIn ? (
                                    <>
                                        Thank you for your time and patience.
                                        Come back soon !
                                    </>
                                ) : (
                                    <>
                                        By clicking on Login, I accept the Terms
                                        & Conditions & Privacy Policy
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* header  */}
            <header className="hidden md:block p-3 shadow-xl bg-white sticky top-0 left-0 z-50">
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
                        className="group ml-2 md:ml-5 text-[#686b78] z-[999] text-[8px] md:text-[16px]"
                        onClick={showSideMenu}
                    >
                        <span className="font-semibold border-b-1  mx-[3px] md:font-bold md:border-b-2 md:mx-[5px] group-hover:text-[#ff5200] hover:cursor-pointer">
                            {' '}
                            Other
                        </span>
                        <span className="cursor-pointer group-hover:text-gray-400">
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
                                    onClick={showSignMenu}
                                >
                                    <FiUser />
                                    {isLoggedIn ? <>Hi, user</> : <>Sign In</>}
                                </Link>
                            </li>

                            <Link
                                to="/cart"
                                className="group flex items-center gap-1 md:gap-2 hover:text-[#ff5200] hover:cursor-pointer stroke-2 stroke-[#686b78]  hover:stroke-[#FF5200] "
                            >
                                {cartItems.length > 0 ? (
                                    <div className="relative flex justify-center items-center">
                                        <ShopingBag className=" fill-[#1ba672] group-hover:fill-[#ff5200]" />
                                        <span className="absolute text-[12px] text-white">
                                            {cartItems.length}
                                        </span>
                                    </div>
                                ) : (
                                    <div className="relative flex justify-center items-center">
                                        <ShopingBag className=" fill-white " />
                                        <span className="absolute text-[12px]  ">
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

            {/* header for mobile */}
            <header className="md:hidden py-3 px-6 shadow-xl bg-white sticky top-0 left-0 z-50">
                <div className="w-full  flex items-center overflow-hidden">
                    <Link to="/">
                        <div className="w-10">
                            <img
                                src={LOGO_URL}
                                alt="logo"
                                className="w-full rounded-full border-[0.5px]"
                            />
                        </div>
                    </Link>
                    <div
                        className="flex items-center ml-2 text-[#686b78] z-[999] "
                        onClick={showSideMenu}
                    >
                        <CiLocationOn fontSize={'18px'} />
                        <span className="mx-[3px]"> Location</span>
                    </div>
                    <nav className=" ml-auto  text-[10px] mr-2 text-[#3d4152]">
                        <ul className="flex  list-none gap-5">
                            <li className="hover:text-[#ff5200] hover:cursor-pointer ">
                                <Link
                                    to=""
                                    className="flex items-center gap-1 md:gap-2"
                                    onClick={showSignMenu}
                                >
                                    <FiUser fontSize={'18px'} />
                                </Link>
                            </li>

                            <Link
                                to="/cart"
                                className="group flex items-center gap-1 md:gap-2 hover:text-[#ff5200] hover:cursor-pointer stroke-2 stroke-[#686b78]  hover:stroke-[#FF5200] "
                            >
                                {cartItems.length > 0 ? (
                                    <div className="relative flex justify-center items-center">
                                        <ShopingBag className=" fill-[#1ba672] group-hover:fill-[#ff5200]" />
                                        <span className="absolute text-[12px] text-white">
                                            {cartItems.length}
                                        </span>
                                    </div>
                                ) : (
                                    <div className="relative flex justify-center items-center">
                                        <ShopingBag className=" fill-white " />
                                        <span className="absolute text-[12px]  ">
                                            {cartItems.length}
                                        </span>
                                    </div>
                                )}
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
