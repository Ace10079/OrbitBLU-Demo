import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is set up in your project

const ViewInterview = ({ closed }) => {
  const [showModal1, setShowModal1] = useState(true);
  const [showModal2, setShowModal2] = useState(false);

  const openModal2 = () => {
    setShowModal1(false);
    setShowModal2(true);
  };

  const closeModals = () => {
    setShowModal1(false);
    setShowModal2(false);
  };

  return (
    <div className="p-4">
      {/* Modal 1 with Form in Grid */}
      {showModal1 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center "
          onClick={closeModals}
        >
          <div
            className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro rounded-md m-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <p
                className="text-gray-500 p-3 rounded-full shadow-lg -m-3 bg-white w-fit items-center"
                onClick={closeModals}
              >
                ✖
              </p>
            </div>
            <div className=" border-b-2 border-gray-300 mx-10 p-4">
              <h1 className="font-semibold font-Exo text-2xl text-center">
                View Interview
              </h1>
            </div>
            <div className="p-4">
            <form>
              <div className="grid grid-cols-6  mx-10 my-10">
                <label
                  className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal mb-4"
                  htmlFor="institution_id"
                >
                  Institution ID
                </label>
                <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                  Sathayabama
                </p>

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="room_no"
                >
                  Room No
                </label>
                <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                  vishvanath@gmail.com
                </p>

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="user_id"
                >
                  User Id
                </label>
                <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                  Chennai
                </p>

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="user_name"
                >
                  User Name
                </label>
                <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                  Kovalam
                </p>

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="date"
                >
                  Date
                </label>
                <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                  Chennai
                </p>

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="slot_time"
                >
                  Slot Time
                </label>
                <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                  Ravi
                </p>

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="status"
                >
                  Status
                </label>
               <div className="col-span-4 flex items-center justify-end">
               <p className="bg-violet-100 text-violet-500 w-24 text-center  rounded-lg p-0.5 text-base font-semibold">
                active
              </p>
               </div>
              </div>
              <div className=" flex justify-center gap-1 mb-4 ">
                <button className="border border-orange text-orange px-8 py-2 rounded-md">
                  Cancel
                </button>
                <button
                  className="bg-orange text-white px-9 rounded-md"
                  onClick={openModal2}
                >
                  Edit
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2 */}
      {showModal2 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center "
          onClick={closeModals}
        >
          <div
            className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro rounded-md m-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <p
                className="text-gray-500 p-3 rounded-full shadow-lg -m-3 bg-white w-fit items-center"
                onClick={closeModals}
              >
                ✖
              </p>
            </div>
            <div className=" border-b-2 border-gray-300 mx-10 p-4">
              <h1 className="text-2xl font-semibold text-center  font-Exo">
                Edit Interview
              </h1>
            </div>
            <div className="p-4">
            <form>
              <div className="grid grid-cols-6 gap-3 mx-10 my-10">
                <label
                  className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal mb-4"
                  htmlFor="institution_id"
                >
                  Institution ID
                </label>
                <input className="col-span-4 border rounded-lg px-2 text-gray-400 font-Source_Sans_Pro"
                 placeholder="Sathyabama"
                />

                <label
                  className="block col-span-2 text-gray-900 text-base font-normal mb-4"
                  htmlFor="room_no"
                >
                  Room No
                </label>
                <input className="col-span-4 rounded-lg border px-2 text-gray-400 font-Source_Sans_Pro"
                 placeholder="#123"
                />

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="user_id"
                >
                  User Id
                </label>
                <input className="col-span-4 border rounded-lg px-2 text-gray-400 font-Source_Sans_Pro"
                 placeholder="1234"
                />

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="user_name"
                >
                  User Name
                </label>
                <input className="col-span-4 border rounded-lg px-2 text-gray-400 font-Source_Sans_Pro"
                 placeholder="vishva"
                />

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="date"
                >
                  Date
                </label>
                <input className="col-span-4 border rounded-lg px-2 text-gray-400 font-Source_Sans_Pro"
                 placeholder="12th June 2024"
                />

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="slot_time"
                >
                  Slot Time
                </label>
                <select name="time" id="time" className="col-span-4 border px-2 text-gray-400 rounded-lg"><option value="time">time</option></select>

                <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="status"
                >
                  Status
                </label>
               
               <p className="bg-violet-100 col-span-4 flex justify-center pt-1.5 text-violet-500 w-24 text-center  rounded-lg p-0.5 text-base font-semibold">
                active
              </p>
               
              </div>
              <div className=" flex justify-center gap-1 mb-4 ">
                <button className="border border-orange text-orange px-8 py-2 rounded-md">
                  Cancel
                </button>
                <button
                  className="bg-orange text-white px-9 rounded-md"
                onClick={closed}
                >
                  Edit
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ViewInterview;
