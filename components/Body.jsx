import CardLarge from "../components/CardLarge";
import CardLarge02 from "../components/CardLarge02";

import CardWide from "../components/CardWide";
import CardWide02 from "../components/CardWide02";

import ModalPopUp from "../components/ModalPopUp";
import LoginForm from "../components/LoginForm";

import Image from "next/image";

export default function Body() {
  return (
    <div className="bg-gradient-to-br from-green-400 to-blue-800 text-gray-100">
      <div className=" container mx-auto">
        <div className=" ">
          <div className="  px-64">
            <div className="pt-20">
              <Image
                src="/images/blox_home01.png"
                alt=""
                width={1000}
                height={581}
                className="z-10"
              />
            </div>
            <div className=" text-8xl font-semibold text-yellow-300 text-center">
              Get FREE ROBUX
            </div>
            <div className="text-4xl text-center py-10">
              By completing simple & free tasks!
              <p className="text-center text-xl">
                Play games, fill in surveys & more!
              </p>
            </div>
            <div className="text-4xl text-center py-4 pb-36">
              <ModalPopUp></ModalPopUp>
            </div>
          </div>

          {/* <div className="z-0 w-96 h-96 mr-24">
            <Image
              src="/images/blox_home01.png"
              alt="Picture of the author"
              width={1000}
              height={581}
            />
          </div> */}
        </div>

        <div className="grid grid-rows-1 grid-flow-col gap-7 px-32">
          <CardLarge></CardLarge>
          <CardLarge02></CardLarge02>
        </div>
        <div className="py-12">
          <CardWide></CardWide>
          <CardWide02></CardWide02>
        </div>
      </div>
    </div>
  );
}
