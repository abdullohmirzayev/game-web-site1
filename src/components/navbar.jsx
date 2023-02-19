import { frame, homeImage, korzinka, logo, olovIcon, vector1 } from "../assets/index";

const Navbar = () => {
  return (
    <div className={`flex w-screen h-[63rem]`} id='navbar'>
        {/* Navigation */}
        <div className=" w-3/5 bg-[#000000] flex flex-1 flex-row">
            {/* Logo */}
            <div className="p-12">
                <img src={logo} alt="" />
            </div>
            <div className="flex p-14 ml-[12rem]">
                <ul className="flex gap-20 text-[18px] absolute text-white">
                    <li className="hover:text-[#FDD04A]">
                        <a href="#navbar" className="text-[#FDD04A]">
                            Home
                        </a>
                    </li>
                    <li className="hover:text-[#FDD04A]">
                        <a href="#about" className="">
                            About
                        </a>
                    </li>
                    <li className="hover:text-[#FDD04A]">
                        <a href="#team" className="">
                            Team
                        </a>
                    </li>
                    <li className="hover:text-[#FDD04A]">
                        <a href="#pages" className="">
                            Pages
                        </a>
                    </li>
                    <li className="hover:text-[#FDD04A]">
                        <a href="#shop" className="">
                            Shop
                        </a>
                    </li>
                </ul>
            </div>
            {/* Titel Nav */}
            <div className="my-[22rem] ml-[-30rem]">
                {/* Subtitle */}
                <div className="flex uppercase">
                    <div className="mt-[-0.5rem]">
                        <img src={olovIcon} alt="icon" />
                    </div>
                    <div className="text-[#57B8FF]">
                        <h4>FUTURE OF eSPORTS</h4>
                    </div>
                </div>
                {/* Title */}
                <div className="">
                    <div className=" text-white">
                        <h1 className="text-[72px]">
                            Unleash The <br /> Next Generation <br /> Of Gaming
                        </h1>
                    </div>
                    <div className="">
                        <img src={vector1} alt="vector" className="mt-[-7rem] ml-[11rem]" />
                    </div>
                </div>
                {/* Title paragraph */}
                <div className="text-[#999999] mt-[8rem]">
                    <p className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, <br /> nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
                </div>
                {/* Navbar bottom btn */}
                <div className="">
                    <button className="text-white bg-[#57B8FF] hover:bg-[#999999] font-orbitron font-normal text-[18px] px-[2.3rem] py-[1rem] mt-8 mr-9" type="button">
                        Explore More
                    </button>
                    <button className="text-white bg-[#000000]  hover:bg-[#999999] font-orbitron font-normal text-[18px] px-[2.3rem] py-[1rem] mt-8" type="button">
                        View our team
                    </button>
                </div>
            </div>
        </div>
        {/* korzinka and btn  */}
        <div className="w-2/5 bg-[#57B8FF] ">
            <div className="flex justify-end mx-[7rem] my-[2.25rem]">
                <div className="mt-5 mr-3 w-14">
                    <img src={korzinka} alt="car" />
                </div>
                <div className=" hover:bg-[#999999] border-solid border-4 px-16 py-5">
                    <h4 className="font-orbitron font-normal text-[18px] text-white">Contact Us</h4>
                </div>
            </div>
            <div className="absolute mt-[14rem] ml-[-5.5rem]">
                <img src={homeImage} alt="" />
            </div>
            <div className="absolute mt-[42rem] ml-[32rem]">
                <img src={frame} alt="" className="" />
            </div>
        </div>  
    </div>
  );
};

export default Navbar;
