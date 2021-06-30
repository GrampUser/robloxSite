import Link from "next/link";
import ModalPopUp from "../components/ModalPopUp";

export default function Navbar() {
  return (
    <>
      <nav className="z-0 fixed shadow-lg sticky top-0 relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-900 bg-opacity-80 ">
        <div className="flex px-10">
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide">
                Blocky Rewards
              </span>
            </a>
          </Link>
        </div>

        <div className="flex px-0 pt-1">
          <Link href="/DailyRewards">
            <button
              className="hover:bg-indigo-300 bg-indigo-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-8 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              Daily Rewards
            </button>
          </Link>
          <p className=" text-white px-10 pb-3 pt-3"></p>
          {/* <button
            className="hover:bg-indigo-300 bg-indigo-500 bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-8 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            Login
          </button> */}
        </div>
      </nav>
    </>
  );
}
