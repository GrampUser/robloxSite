export default function CardLarge() {
  return (
    <div className=" py-6 flex flex-col justify-center sm:py-12 ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r  from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-gray-700 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <img src="/images/hero01.png" className="w-46" />
            </div>

            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <p>Sign up! </p>
            </div>

            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-300 sm:text-lg sm:leading-7">
                <p>
                  Simply log in with your username, and confirm it is you. We do
                  not collect any personal information like passwords, so please
                  ignore or report anyone that does so!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
