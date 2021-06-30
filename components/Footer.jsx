export default function Footer() {
  return (
    <>
      <footer className=" bg-gray-700 text-white grid justify-self-auto">
        <div className="py-12 grid grid-rows-1 grid-flow-col gap-10 px-44">
          <div className="w-96">
            <h1 className="font-bold">About Us</h1>
            <hr className="py-2"></hr>
            <p>
              What is Blocky Rewards? Blocky Rewards is a website focused on
              awarding free currency, here at Blocky Rewards we pay out the
              highest rates compared to all of our competitors. Blocky Rewards
              is completely free and safe to use.
            </p>
          </div>

          <div className="w-96">
            <h1 className="font-bold">HOW DOES IT WORK?</h1>
            <hr className="py-2"></hr>
            <p>
              At Blocky Rewards, we do not ask for or require any personal
              information. You complete offers on the website and earn currency
              in which you can withdraw to your account. For every offer
              completed, our partners pay us, and in turn, we invest a portion
              of that money back into currency for payouts to give back to you,
              creating a fair and win-win situation for both parties.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 py-4 grid grid-rows-1 grid-flow-col gap-10 px-44 items-center ">
          <div className="w-80">
            <p>© Blocky Rewards 2019-2021 </p>
          </div>
          <div className="w-80">
            <p>tussowork@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}
