const LocationSidebar = () => {
    return (
        <>
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
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationSidebar;
