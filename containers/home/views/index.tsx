import Navbar from "@components/navbar";
import Link from "next/link";

const HomeView = () => {
  return (
    <>
      <Navbar/>
      <div className="flex flex-row bg-[#FAFAFA]">
        <div>
          <h1 className="mt-40 ml-24 text-[64px] font-extrabold tracking-wide">Your Perfect</h1><br></br>
          <h1 className="-mt-12 ml-24 text-[92px] font-bold tracking-wide text-[#FCCA12]">Kids Clothing</h1><br></br>
          <p className="mt-4 mx-24 text-[24px] font-thin tracking-wider leading-normal">We sell a perfect and comfortable kids cloth.<br></br>Find your favourite cloths with an affdorable price.<br></br>Find your’s now!</p>
          <Link href="/aboutus">
          <button className="mt-16 w-[200px] h-[64px] bg-[#FCCA12] text-white font-bold text-[24px] ml-24 rounded-2xl hover:bg-yellow-500">About Us</button>
          </Link>
        </div>
        <div className="flex">
          <img className="-mt-2 max-w-fit ml-20" src="/src/landing.png"></img>
        </div>
      </div>
      <div className="flex flex-row justify-center bg-[#FAFAFA]">
        <h1 className="font-bold text-3xl mx-16 mt-24">Why You Should Choose Us?</h1>
      </div>
    </>
  );
};

export default HomeView;
