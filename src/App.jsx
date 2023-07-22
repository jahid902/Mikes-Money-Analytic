import { PiButterflyDuotone, PiNotificationLight } from "react-icons/Pi";
import { BiSearchAlt, BiHomeAlt, BiLogOut } from "react-icons/Bi";
import { FaRegNewspaper, FaNewspaper, FaAngleDown } from "react-icons/Fa";
import avatar from "/profile.png";
import MoneyChart from "./MoneyChart";
import LoadingSpinner from "./LoadingSpinner";
import LoadingSpinner2 from "./LoadingSpinner2";
import LoadingSpinner3 from "./LoadingSpinner3";


function App() {
  return (
    <>
      <div className="font-serif flex flex-col md:flex-row gap-2 bg-gradient-to-b from-slate-200 to-slate-400 px-2 py-4">
        {/* nav section */}
        <div className="w-[5%] rounded-md items-center flex flex-row md:flex-col justify-between py-6 bg-white px-3">
          <div className="space-y-4">
            <PiButterflyDuotone
              size={25}
              className="text-sky-600"
            ></PiButterflyDuotone>
            <BiSearchAlt size={25}></BiSearchAlt>
          </div>
          <div className="flex-grow pt-16 space-y-4">
            <BiHomeAlt
              size={25}
              className="text-white p-0.5 rounded-md bg-sky-700"
            ></BiHomeAlt>
            <FaNewspaper size={25}></FaNewspaper>
            <FaRegNewspaper size={25}></FaRegNewspaper>
            <img className="w-7 h-7  rounded-full" src={avatar} alt="" />
          </div>
          <div className="space-y-4">
            <PiNotificationLight size={25}></PiNotificationLight>
            <BiLogOut size={25}></BiLogOut>
          </div>
        </div>

        {/* profile section */}
        <div className="w-[25%] rounded-md space-y-8 flex flex-col bg-gradient-to-t from-slate-100 via-slate-200 to-slate-300 px-6 py-10">
          <div className="flex justify-start gap-3">
            <img
              className="w-14 h-14 rounded-full"
              src="https://i.ibb.co/ZgqdDFV/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray.jpg"
              alt=""
            />
            <h1 className="font-bold text-xl">
              Hi, Mike. <br />{" "}
              <span className="font-normal text-sm">Welcome back.</span>
            </h1>
          </div>
          <div className="space-y-1">
            <h1 className="font-bold ">Today</h1>
            <div className="py-3  pl-1 pr-2 hover:bg-slate-100 duration-300 bg-slate-300">
              <h1 className="font-bold text-2xl">$19,892</h1>
              <h6 className="text-xs mt-1 text-slate-500">Account Balance.</h6>
            </div>
            <div className="py-3 pl-1 pr-2 hover:bg-slate-100 duration-300 bg-slate-300">
              <h1 className="font-bold text-lg">$19,892</h1>
              <h6 className="text-xs mt-1 text-slate-500">
                Year To Date Contribution.
              </h6>
            </div>
            <div className="py-3 pl-1 pr-2 hover:bg-slate-100 duration-300 bg-slate-300">
              <h1 className="font-bold text-sm">$19,892</h1>
              <h6 className="text-xs mt-1 text-slate-500">Total Interest.</h6>
            </div>
            <button className=" btn btn-primary btn-md">
              I want to <FaAngleDown></FaAngleDown>
            </button>
          </div>
          <div className="space-y-1">
            <h1 className="font-bold ">Recent Transactions</h1>
            <div className="py-3  pl-1 pr-2 hover:bg-gray-300 duration-200">
              <h1 className="text-xs  text-slate-500">20-08-07</h1>
              <h6 className="font-bold mt-1 text-sm">
                Withdrawal Transfer To Bank-xx01
              </h6>
            </div>
            <div className="py-3 pl-1 pr-2 hover:bg-gray-300 duration-200">
              <h1 className="text-xs  text-slate-500">20-09-13</h1>
              <h6 className="font-bold mt-1 text-sm">
                Withdrawal Transfer To Bank-xx02
              </h6>
            </div>
            <div className="py-3  pl-1 pr-2 hover:bg-gray-300 duration-200">
              <h1 className="text-xs  text-slate-500">20-12-22</h1>
              <h6 className="font-bold mt-1 text-sm">
                Withdrawal Transfer To Bank-xx03
              </h6>
            </div>
          </div>
        </div>

        {/* graph section */}
        <div className="w-[45%] bg-gradient-to-t from-slate-100 to-slate-200 space-y-4 flex flex-col rounded-md bg-white py-10 px-8">
          <div>
            <h5 className="text-sky-700 font-semibold text-sm">
              Retirement Income
            </h5>
            <h2 className="font-bold text-lg">Starting Year, 2056</h2>
          </div>
          <div className="flex gap-2">
            <div className="py-3 w-full border-b-2 border-sky-700">
              <h1 className="font-bold text-2xl">$300,000</h1>
              <h6 className="text-xs mt-1 text-slate-500">My Goal.</h6>
            </div>
            <div className="py-3 w-full border-b-2 border-sky-700">
              <h1 className="font-bold text-2xl">59%</h1>
              <h6 className="text-xs mt-1 text-slate-500">Goal Achieved.</h6>
            </div>
            <div className="py-3 w-full border-b-2 border-sky-700">
              <h1 className="font-bold text-2xl">$300</h1>
              <h6 className="text-xs mt-1 text-slate-500">Est. Monthly Income.</h6>
            </div>
          </div>
          <div>
            <h3 className="font-bold ">Contributions OverTime</h3>
            <div className="flex gap-2 my-3 justify-between">
              <span className="bg-sky-800 h-[10px] rounded-full flex my-auto text-slate-200">...</span>
              <p className="font-sans text-xs">Employer: <span className="font-bold text-xs">K 73,500</span></p>
              <span className="bg-sky-600 h-[10px] rounded-full flex my-auto text-slate-200">...</span>
              <p className="font-sans text-xs">Employee: <span className="font-bold text-xs">K 52,500</span></p>
              <span className="bg-sky-400 h-[10px] rounded-full flex my-auto text-slate-200">...</span>
              <p className="font-sans text-xs">Total Interest: <span className="font-bold text-xs">K 244,313</span></p>
            </div>
            <MoneyChart></MoneyChart>
          </div>
          <div>
          <h1 className="font-bold text-lg">
              How Do I Compare My peers? <br />{" "}
              <span className="font-normal text-sm">These Numbers represents current goal achievements.</span>
            </h1>
          </div>
          <div className="flex gap-12 ">
            <div className="space-y-2">
            <p className="border-b-2  border-stone-400 pb-1 flex gap-2 text-xs">Age: <span className="font-bold text-xs flex ">Under 30 <FaAngleDown className="flex my-auto"></FaAngleDown></span></p>
            <p className="border-b-2 border-stone-400 pb-1 flex gap-2 text-xs">Salary: <span className="font-bold text-xs flex ">K 20 - K 30<FaAngleDown className="flex my-auto"></FaAngleDown></span></p>
            <p className="border-b-2 border-stone-400 pb-1 flex gap-2 text-xs">Gender: <span className="font-bold text-xs flex ">Male <FaAngleDown className="flex my-auto"></FaAngleDown></span></p>
            </div>
            <div className="flex gap-5">
              <LoadingSpinner2></LoadingSpinner2>
              <LoadingSpinner></LoadingSpinner>
              <LoadingSpinner3></LoadingSpinner3>
            </div>
          </div>
        </div>

        {/* calc section */}
        <div className="w-[25%]"></div>
      </div>
    </>
  );
}

export default App;
