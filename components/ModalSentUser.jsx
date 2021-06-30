import React from "react";
import Link from "next/link";

export default function ModalSentUser() {
  const [showModal, setShowModal, helperText] = React.useState(false);

  return (
    <>
      <button
        className="hover:bg-indigo-300 bg-indigo-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-16 py-5 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Send Confirmation Link
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Please Confirm User
                  </h3>
                </div>
                {/*body*/}

                <div className="relative p-6 flex-auto">
                  <div className="mb-3 pt-0 text-black">
                    <p>
                      A confirmation message has been sent to your user account.
                      Please check the link to confirm.
                    </p>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <Link href="/" required>
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Go back to home page
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
