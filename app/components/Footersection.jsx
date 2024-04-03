
const Footersection = () => {
    return (
        <footer className="h-fit w-full border-2 bg-white mx-auto p-2 xl:p-10">
            <div className="space-y-5 ">
                <div className=" grid grid-cols-4">
                    <div className="col-span-2 xl:col-span-3 md:col-span-3 2xl:col-span-3">
                        <a href="/" className="text-black">
                                <span className="text-black font-bold text-xl xl:text-3xl">SUGENGKOST</span>
                        </a>
                    </div>
                    <div className="col-span-2 xl:col-span-1 md:col-span-1 2xl:col-span-1 flex justify-between text-black text-xs xl:text-base 2xl:text-base">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#project">Facilities</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <p className="text-black text-xs xl:text-base 2xl:text-base font-sans">© Designed By Afyww</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footersection;
