import React from "react";
import { IoMdClose } from "react-icons/io";

const AddLeads = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center  ">
        <div className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro rounded-md m-2">
          <p className="absolute right-2 top-2">
            <IoMdClose
              className="text-xl bg-white "
              //   onClick={handleCloseModal}
            />
          </p>
          <div className="border-b-2 border-gray-300 mx-10">
            <h1 className="text-xl font-medium text-center pt-10 font-Exo my-2 pb-2">
              Edit Package
            </h1>
          </div>

          <form>
            <div className="grid grid-cols-6  mx-10 my-10">
              <label
                className="block col-span-3 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                htmlFor="complaint_rainsed"
              >
                Complaint Rainsed from
              </label>
              <input
                type="text"
                placeholder="From"
                className="border-2 col-span-3 rounded-lg mb-2 py-1.5 px-2"
              />
              <label
                className="block col-span-3 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                htmlFor="email"
              >
                Email ID
              </label>
              <input
                type="text"
                placeholder="Enter your Mail ID"
                className="border-2 col-span-3 rounded-lg mb-2 py-1.5 px-2"
              />
              <label
                className="block col-span-3 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your Address"
                className="border-2 col-span-3 rounded-lg mb-2 py-1.5 px-2"
              />
              <label
                className="block col-span-3 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                placeholder="Enter your City"
                className="border-2 col-span-3 rounded-lg mb-2 py-1.5 px-2"
              />
              <label
                className="block col-span-3 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                htmlFor="state"
              >
                State
              </label>
              <input
                type="text"
                placeholder="Enter your State"
                className="border-2 col-span-3 rounded-lg mb-2 py-1.5 px-2"
              />

              <label
                className="block col-span-3 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                htmlFor="note"
              >
                Note
              </label>
              <textarea name="note" id="note" placeholder="Type your messages" className="col-span-3 h-24 rounded-lg border-2 px-2.5 py-1"></textarea>
            </div>
            <div className=" flex justify-center gap-1 mb-4 ">
              <button className="border border-orange text-orange px-8 py-2 rounded-md">
                Cancel
              </button>
              <button
                className="bg-orange text-white px-9 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLeads;
