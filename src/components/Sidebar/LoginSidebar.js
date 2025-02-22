import { useState } from 'react';
const LoginSidebar = (props) => {
    console.log(props);

    const [open, setOpen] = useState(false);
    if (props.isOpen) {
        setOpen(true);
    }

    return (
        <>
            <div
                className="h-full w-full black-overlay fixed z-55 flex  duration-600 overflow-hidden"
                style={{
                    opacity: open ? 1 : 0,
                    visibility: open ? 'visible' : 'hidden',
                }}
            >
                <div
                    className="h-full w-full md:w-4/12 bg-white absolute duration-600"
                    style={{
                        right: open ? '0%' : '-100%',
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {/* <div className="w-9/12 mx-auto  flex flex-col py-8 gap-4">
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
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default LoginSidebar;
