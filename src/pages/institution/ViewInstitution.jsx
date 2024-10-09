import React from "react";
import { IoMdClose } from "react-icons/io";

const ViewInstitution = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center  ">
        <div className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro m-2">
          <p className="absolute right-2 top-2">
            <IoMdClose className="text-xl bg-white " />
          </p>
          <div className="border-b-2 border-gray-300 mx-10">
            <h1 className="text-xl font-medium text-center pt-10 font-Exo pb-2">
              Add Institution
            </h1>
          </div>

          <form>
            <div className="grid grid-cols-6  mx-10 my-10">
              <label
                className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal mb-4"
                htmlFor="institution_name"
              >
                Institution Name
              </label>
              <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                Sathayabama
              </p>

              <label
                className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                htmlFor="email"
              >
                Email
              </label>
              <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
               vishvanath@gmail.com
              </p>

              <label
                className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                htmlFor="address"
              >
                Address
              </label>
              <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                Chennai
              </p>

              <label
                className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                htmlFor="district"
              >
                District
              </label>
              <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                Kovalam
              </p>

              <label
                className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                htmlFor="state"
              >
                State
              </label>
              <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                Chennai
              </p>

              <label
                className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                htmlFor="SPOC_Name"
              >
                SPOC Name
              </label>
              <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                Ravi
              </p>

              <label
                className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                htmlFor="SPOC_Phone"
              >
                SPOC Phone no
              </label>
              <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
                00000 00000
              </p>
            </div>
            <div className=" flex justify-center gap-1 mb-4 ">
              <button className="border border-orange text-orange px-8 py-2 rounded-md">
                Cancel
              </button>
              <button className="bg-orange text-white px-9 rounded-md">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewInstitution;
