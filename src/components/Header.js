import { RxCaretDown, RxCross2 } from 'react-icons/rx';
import { FiUser } from 'react-icons/fi';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { useState } from 'react';
import { LOGO_URL } from '../../utils/constants';
const Header = () => {
    const [toggle, setToggle] = useState(false);

    const links = [
        {
            icon: <FiUser />,
            name: ' Sign In',
        },
        {
            icon: <LiaShoppingBagSolid />,
            name: ' Cart',
        },
    ];

    const showSideMenu = () => {
        setToggle(true);
    };
    const hideSideMenu = () => {
        setToggle(false);
    };
    return (
        <>
            <div
                className="black-overlay h-full w-full fixed duration-500 z-[9999]"
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? 'visible' : 'hidden',
                }}
                onClick={hideSideMenu}
            >
                <div
                    className="bg-white w-[35vw] h-full absolute duration-[400ms]"
                    style={{
                        left: toggle ? '0%' : '-100%',
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <RxCross2
                        className="font-extrabold absolute top-7 left-7 text-[24px] cursor-pointer"
                        onClick={hideSideMenu}
                    />
                    <div className=" w-[70%] mx-auto absolute top-[15%] left-[15%]">
                        <input
                            type="text"
                            placeholder="Search for area, street name.."
                            className="w-full border-1 p-2"
                        />
                    </div>
                </div>
            </div>
            <header className="p-3 shadow-xl sticky top-0 bg-white z-[999]">
                <div className="max-w-[1200px] mx-auto  flex items-center">
                    <div className="w-18">
                        <img
                            src={LOGO_URL}
                            alt="logo"
                            className="w-full rounded-full border-1"
                        />
                    </div>
                    <div className="ml-5 text-[#686b78] z-[999]" onClick={showSideMenu}>
                        <span className="font-bold border-b-2 mx-[5px] hover:text-[#ff5200] hover:cursor-pointer">
                            {' '}
                            Other
                        </span>
                        <span className="cursor-pointer">
                            Lucknow, Uttar Pradesh, India
                        </span>
                        <RxCaretDown className="inline text-[#ff5200] text-[25px] font-extrabold hover:cursor-pointer" />
                    </div>
                    <nav className="flex  list-none gap-5 ml-auto  text-[18px] font-semibold mr-5 text-[#3d4152]">
                        {links.map((link, index) => {
                            return (
                                <li
                                    key={index}
                                    className="hover:text-[#ff5200] hover:cursor-pointer flex items-center gap-2"
                                >
                                    {link.icon}
                                    {link.name}
                                </li>
                            );
                        })}
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
