import Image from "next/image";

export default function CardWide02() {
  return (
    <div className="  flex flex-col justify-center  ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative bg-gray-700 shadow-lg sm:rounded-3xl px-24">
          <div className="py-8 grid grid-flow-col pr-14">
            <div className="w-24  py-12 ">
              <Image src="/images/robux.png" width={236} height={260} />
            </div>
            <div className="pt-16 pl-8 ">
              <div className="text-2xl font-semibold ">Stock</div>
              <div className="text-4xl font-medium text-yellow-300">72,984</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
