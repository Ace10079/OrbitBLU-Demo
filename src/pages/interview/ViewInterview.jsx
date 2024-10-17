import React, { Fragment } from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ViewInterview = () => {
   
        const [isModal, setIsModal] = useState(false);
      
        const handleCloseModal = () => {
          setIsModal(false);
        };
      
        const handleOpenModal = () => {
          setIsModal(true);
        };

  return (
    <>
    <Fragment>
      <div>
        {}
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center  ">
          <div className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro rounded-md m-2">
            <p className="absolute place-self-end  right-2 top-2">
              <IoMdClose
                className="text-xl bg-white "
                onClick={handleCloseModal}
              />
            </p>
            <div className="border-b-2 border-gray-300 mx-10">
              <h1 className="text-xl font-medium text-center pt-10 font-Exo pb-2">
                View Interview
              </h1>
            </div>

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
                  onClick={handleOpenModal}
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
    {/* {isModal && <AddInstitution />} */}
  </>
  )
}

export default ViewInterview
