import React, { Fragment } from "react";
import { IoMdClose } from "react-icons/io";

const AddInstitution = ({closeadd,closed}) => {
  return (
    <div>
         <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center "
          onClick={closed}
        >
          <div
            className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro rounded-md m-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <p
                className="text-gray-500 p-3 rounded-full shadow-lg -m-3 bg-white w-fit items-center"
                onClick={closeadd}
              >
                ✖
              </p>
            </div>
            <div className=" border-b-2 border-gray-300 mx-10 p-4">
              <h1 className="text-lg font-semibold text-center font-Exo">
                Add Insitution
              </h1>
            </div>
            <div className="p-4">
              <form>
                <div className="grid grid-cols-6 items-center  mx-7 my-10">
                  <label
                    className="block col-span-2 font-Source_Sans_Pro  text-gray-900 text-base font-normal mb-4"
                    htmlFor="institution_name"
                  >
                    Institution Name
                  </label>
                  <input
                    className="appearance-none col-span-4 my-2 border rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none focus:shadow-outline"
                    id="institution_name"
                    type="text"
                    placeholder="Name "
                  />

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none my-2 col-span-4 border rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="E-mail ID"
                  />

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="appearance-none my-2 col-span-4 border rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Address"
                  />

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="district"
                  >
                    District
                  </label>
                  <input
                    className="appearance-none my-2 col-span-4 border rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none focus:shadow-outline"
                    id="district"
                    type="text"
                    placeholder="District"
                  />

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <input
                    className="appearance-none col-span-4 my-2 border rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none focus:shadow-outline"
                    id="state"
                    type="text"
                    placeholder="State"
                  />

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="SPOC_Name"
                  >
                    SPOC Name
                  </label>
                  <input
                    className="appearance-none col-span-4 border my-2 rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none focus:shadow-outline"
                    id="SPOC_Name"
                    type="text"
                    placeholder="SPOC Name"
                  />

                  <label
                    className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                    htmlFor="SPOC_Phone"
                  >
                    SPOC Phone no
                  </label>
                  <input
                    className="appearance-none col-span-4 border mt-2 rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none focus:shadow-outline"
                    id="SPOC_Phone"
                    type="phone"
                    placeholder="SPOC Phone no."
                  />
                </div>
                <div className=" flex justify-center items-center gap-1 mb-4 ">
                  <p className="border border-orange text-orange px-8 py-2 rounded-md">
                    Cancel
                  </p>
                  <p
                    className="bg-orange text-white px-9 py-2 rounded-md"
                  >
                    Add
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AddInstitution;
