import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=" flex justify-center items-center pt-32 gap-24 pb-32">
            <div>
                <div className=" mb-36">
                <p className="text-[#FF9000] text-base font-normal tracking-tighter">Courses up to 70% off</p>
                <div className="mt-16 mb-20 flex flex-col gap-2">
                    <h3 className="text-[#1C2B35] text-6xl font-bold">Best Courses For All</h3>
                    <p className="text-[#2A414F] text-2xl font-normal">Discover new era of knowladge and ready-to-get expart.</p>
                </div>
                <Link to="/products">
                <button className=" bg-[#FF9900] hover:bg-[#FF8000] hover:shadow-xl w-52 h-14 rounded-md"><span className="w-36 h-6 text-[#0E161A] text-2xl font-normal">Courses</span></button>
                </Link>
                </div>
            </div>
            <div className="">
                <div className="w-[430px] h-[633px] absolute rounded-lg -z-10 bg-[#FFE0B3]"></div>
                <div className="w-[451px] h-[633px] rounded-lg z-10 relative -right-7 -top-7"><img src={`https://i.ibb.co/QPGz4R1/girl-6027003.jpg`} alt="" className="h-full rounded-lg "/></div>
            </div>
        </div>
    );
};

export default Banner;