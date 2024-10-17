import React, { Fragment } from "react";
import { IoMdClose } from "react-icons/io";

const AddPackages = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center  ">
        <div className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro  m-2">
          <p className="absolute right-2 top-2">
            <IoMdClose className="text-xl bg-white " />
          </p>
          <div className="border-b-2 border-gray-300 mx-10">
            <h1 className="text-xl font-medium text-center pt-10 font-Exo pb-2">
              Add Institution
            </h1>
          </div>

          <form>
            <div className="grid grid-cols-6 items-center mx-7 my-10">
              <label
                className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal mb-4"
                htmlFor="package_name"
              >
                Package Name
              </label>
              <input
                className="appearance-none col-span-4 my-2 border rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none focus:shadow-outline"
                id="package_name"
                type="text"
                placeholder="Name "
              />

              <label
                className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                htmlFor="pricing"
              >
                Pricing
              </label>
              <input
                className="appearance-none my-2 col-span-4 border rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none focus:shadow-outline"
                id="pricing"
                type="text"
                placeholder="Name"
              />

              <label
                className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                htmlFor="credit"
              >
                Credit
              </label>
              <input
                className="appearance-none my-2 col-span-4 border rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none mb-4 focus:shadow-outline"
                id="credit"
                type="text"
                placeholder="Name"
              />

              <label
                className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                htmlFor="description"
              >
                Description
              </label>
              <textarea name="description" id="description" placeholder="Name" className="border col-span-4 rounded-lg px-2 pb-10 pt-2" ></textarea>
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

export default AddPackages;
