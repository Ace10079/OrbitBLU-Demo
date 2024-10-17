import React, { Fragment } from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import AddPackages from "./AddPackages";

const EditPackages = () => {
 
  return (
    <>
      <Fragment>
        <div>
          {}
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center  ">
            <div className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro rounded-md m-2">
              <p className="absolute right-2 top-2">
                <IoMdClose
                  className="text-xl bg-white "
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
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="package_id"
                  >
                    Package Id
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="package_name"
                  >
                    Package Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="pricing"
                  >
                    Pricing
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />

                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="credit"
                  >
                    Credit
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="last_update"
                  >
                    Last Update
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2 h-40"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab perspiciatis qui facilis voluptas omnis magnam nihil alias quas itaque vero similique quaerat consectetur dolores assumenda, totam cum tenetur molestias necessitatibus."
                  >

                  </textarea>
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
      </Fragment>
    </>
  );
};

export default EditPackages;
