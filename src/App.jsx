import { PiButterflyDuotone, PiNotificationLight } from "react-icons/Pi";
import { BiSearchAlt, BiHomeAlt, BiLogOut } from "react-icons/Bi";
import { FaRegNewspaper, FaNewspaper, FaAngleDown } from "react-icons/Fa";
import avatar from "/profile.png"

function App() {
  return (
    <>
      <div className="font-serif flex flex-col md:flex-row gap-2 bg-gradient-to-b from-slate-200 to-slate-400 px-2 py-4">
        {/* nav section */}
        <div className="w-[5%] rounded-md items-center flex flex-row md:flex-col justify-between py-6 bg-white px-3">
          <div className="space-y-4">
            <PiButterflyDuotone size={25} className="text-sky-600"></PiButterflyDuotone>
            <BiSearchAlt size={25}></BiSearchAlt>
          </div>
          <div className="flex-grow pt-16 space-y-4">
            <BiHomeAlt size={25} className="text-white p-0.5 rounded-md bg-sky-700"></BiHomeAlt>
            <FaNewspaper size={25}></FaNewspaper>
            <FaRegNewspaper size={25}></FaRegNewspaper>
            <img
              className="w-7 h-7  rounded-full"
              src={avatar}
              alt=""
            />
          </div>
          <div className="space-y-4">
          <PiNotificationLight size={25}></PiNotificationLight>
            <BiLogOut size={25}></BiLogOut>
          </div>
        </div>

        {/* profile section */}
        <div className="w-[31%] rounded-md space-y-8 flex flex-col bg-gradient-to-t from-slate-100 via-slate-200 to-slate-300 px-12 py-10">
          <div className="flex justify-start gap-3">
          <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/ZgqdDFV/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray.jpg" alt="" />
          <h1 className="font-bold text-xl">Hi, Mike. <br /> <span className="font-normal text-sm">Welcome back.</span></h1>
          </div>
          <div className="space-y-1">
            <h1 className="font-bold ">Today</h1>
            <div className="py-3  pl-1 pr-2 hover:bg-slate-100 duration-300 bg-slate-300">
              <h1 className="font-bold text-2xl">$19,892</h1>
              <h6 className="text-xs mt-1 text-slate-500">Account Balance.</h6>
            </div>
            <div className="py-3 pl-1 pr-2 hover:bg-slate-100 duration-300 bg-slate-300">
              <h1 className="font-bold text-lg">$19,892</h1>
              <h6 className="text-xs mt-1 text-slate-500">Year To Date Contribution.</h6>
            </div>
            <div className="py-3 pl-1 pr-2 hover:bg-slate-100 duration-300 bg-slate-300">
              <h1 className="font-bold text-sm">$19,892</h1>
              <h6 className="text-xs mt-1 text-slate-500">Total Interest.</h6>
            </div>
          <button className="w-[50%] btn btn-primary btn-md">I want to <FaAngleDown></FaAngleDown></button>
          </div>
          <div className="space-y-1">
            <h1 className="font-bold ">Recent Transactions</h1>
            <div className="py-3  pl-1 pr-2 hover:bg-gray-300 duration-200">
              <h1 className="text-xs  text-slate-500">20-08-07</h1>
              <h6 className="font-bold mt-1 text-sm">Withdrawal Transfer To Bank-xx01</h6>
            </div>
            <div className="py-3 pl-1 pr-2 hover:bg-gray-300 duration-200">
              <h1 className="text-xs  text-slate-500">20-09-13</h1>
              <h6 className="font-bold mt-1 text-sm">Withdrawal Transfer To Bank-xx02</h6>
            </div>
            <div className="py-3  pl-1 pr-2 hover:bg-gray-300 duration-200">
              <h1 className="text-xs  text-slate-500">20-12-22</h1>
              <h6 className="font-bold mt-1 text-sm">Withdrawal Transfer To Bank-xx03</h6>
            </div>
            
          </div>
        </div>
        {/* graph section */}
        <div className="w-[32%]"></div>
        {/* calc section */}
        <div className="w-[32%]"></div>
      </div>
    </>
  );
}

export default App;
