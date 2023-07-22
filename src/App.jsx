import { PiButterflyDuotone, PiNotificationLight } from "react-icons/Pi";
import { BiSearchAlt, BiHomeAlt, BiLogOut } from "react-icons/Bi";
import { FaRegNewspaper, FaNewspaper } from "react-icons/Fa";
import avatar from "../public/profile.png"

function App() {
  return (
    <>
      <div className="flex gap-2 bg-gradient-to-b h-[100vh] from-slate-50 to-slate-200 px-4">
        {/* nav section */}
        <div className="flex flex-row md:flex-col justify-between py-6 bg-white px-3">
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
        <div></div>
        {/* graph section */}
        <div></div>
        {/* calc section */}
        <div></div>
      </div>
    </>
  );
}

export default App;
