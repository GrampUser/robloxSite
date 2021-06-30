import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DailyRewards() {
  return (
    <Layout className="">
      <Navbar className=""></Navbar>

      <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-800 text-gray-100">
        <div className="py-12 px-32 ">
          <div className="relative bg-gray-700 shadow-lg sm:rounded-2xl px-52 pb-36 pt-24 ">
            <div className="text-5xl text-left font-semibold py-24-">
              Daily Rewards
            </div>
            <p className="py-8">Log in to start claiming your rewards!</p>
            <table className="table-auto pt-24 ">
              <tbody>
                <tr className="px-64">
                  <td className="py-8">Complete 1 Offers</td>
                  <td ClassName="">
                    <button
                      className="hover:bg-indigo-300 bg-indigo-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-8 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Claim
                    </button>
                  </td>
                  <td>0 / 1</td>
                </tr>
                <tr class="">
                  <td className="py-8">Complete 3 Offers</td>
                  <td>
                    {" "}
                    <button
                      className="hover:bg-indigo-300 bg-indigo-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-8 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Claim
                    </button>
                  </td>
                  <td>0 / 3</td>
                </tr>
                <tr>
                  <td className="py-8">Complete 5 Offers</td>
                  <td>
                    {" "}
                    <button
                      className="hover:bg-indigo-300 bg-indigo-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-8 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Claim
                    </button>
                  </td>
                  <td>0 / 5</td>
                </tr>
                <tr>
                  <td className="py-8">Complete 10 Offers</td>
                  <td>
                    {" "}
                    <button
                      className="hover:bg-indigo-300 bg-indigo-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-8 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Claim
                    </button>
                  </td>
                  <td>0 / 10</td>
                </tr>
                <tr>
                  <td className="py-8">Complete 25 Offers</td>
                  <td>
                    {" "}
                    <button
                      className="hover:bg-indigo-300 bg-indigo-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-8 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Claim
                    </button>
                  </td>
                  <td>0 / 25</td>
                </tr>
                <tr className="px-64">
                  <td className="px-64"></td>
                  <td className="px-20"></td>
                  <td className="px-20"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
}
