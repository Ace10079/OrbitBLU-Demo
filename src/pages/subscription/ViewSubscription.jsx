import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is set up in your project

const ViewInstitution = ({ closed }) => {
  const [showModal1, setShowModal1] = useState(true);
  const [showModal2, setShowModal2] = useState(false);

  const openModal1 = () => {
    setShowModal2(false);
  };

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
                View Subscription
              </h1>
            </div>
            <div className="p-4">
              <form>
                <div className="grid grid-cols-6  mx-10 my-10">
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal mb-4"
                    htmlFor="subscription_id"
                  >
                    Subscription ID
                  </label>
                  <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                    Sathayabama
                  </p>

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                    Name
                  </p>

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                    Category
                  </p>

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="date_time"
                  >
                    Date & Time
                  </label>
                  <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                    18 June 24, 02:30 PM
                  </p>

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="payment_mode"
                  >
                    Payment Mode
                  </label>
                  <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                    Chennai
                  </p>

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="payment_status"
                  >
                    Payment Status
                  </label>
                  <div className="col-span-4 flex items-center justify-end">
                    <p className="bg-violet-100 text-violet-500 w-24 text-center  rounded-lg p-0.5 text-base font-semibold">
                      active
                    </p>
                  </div>

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="package"
                  >
                    Package
                  </label>
                  <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                    Name
                  </p>

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="credit"
                  >
                    Credit
                  </label>
                  <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                    100
                  </p>
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
                Edit Subscription
              </h1>
            </div>
            <div className="p-4">
              <form>
                <div className="grid grid-cols-6 gap-4 mx-10 my-10">
                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="col-span-4 border rounded-lg text-sm text-gray-400 border-gray-400"
                    placeholder="Name"
                  />

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="col-span-4 border rounded-lg text-end text-gray-400 font-Source_Sans_Pro"
                  >
                    <option value="category" className="text-start">
                      category
                    </option>
                  </select>

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="date_time"
                  >
                    Date & Time
                  </label>
                  <input
                    type="date"
                    className="col-span-4 border rounded-lg text-sm text-gray-400 border-gray-400"
                  />

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="payment_mode"
                  >
                    Payment Mode
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="col-span-4 border rounded-lg text-end text-gray-400 font-Source_Sans_Pro"
                  >
                    <option value="category" className="text-start">
                      category
                    </option>
                  </select>

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="payment_status"
                  >
                    Payment Status
                  </label>
                  
                    <select
                      name="category"
                      id="category"
                      className="col-span-4 border rounded-lg text-end text-gray-400 font-Source_Sans_Pro"
                    >
                      <option value="active" className="text-start">
                        active
                      </option>
                    </select>
                

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="package"
                  >
                    Package
                  </label>
                  <input
                    type="text"
                    placeholder="packages"
                    className="col-span-4 border rounded-lg text-sm text-gray-400 border-gray-400"
                  />

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="credit"
                  >
                    Credit
                  </label>
                  <input
                    type="text"
                    placeholder="100"
                    className="col-span-4 border rounded-lg text-sm text-gray-400 border-gray-400"
                  />
                </div>
                <div className=" flex justify-center gap-1 mb-4 ">
                  <button className="border border-orange text-orange px-8 py-2 rounded-md">
                    Cancel
                  </button>
                  <button className="bg-orange text-white px-9 rounded-md">
                    Save
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
export default ViewInstitution;
