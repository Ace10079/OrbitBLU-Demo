import React from 'react'
import { IoMdClose } from "react-icons/io";

const EditSubscription = () => {
  return (
    <div>
      <div>
 <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center  ">
          <div className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro rounded-md m-2">
            <p className="absolute place-self-end  right-2 top-2">
              <IoMdClose
                className="text-xl bg-white "
                // onClick={handleCloseModal}
              />
            </p>
            <div className="border-b-2 border-gray-300 mx-10">
              <h1 className="text-xl font-medium text-center pt-10 font-Exo pb-2">
                Edit Subscription
              </h1>
            </div>

            <form>
              <div className="grid grid-cols-6  mx-10 my-10">
               <label
                  className="block col-span-2  text-gray-900 text-base font-normal mb-4"
                  htmlFor="name"
                >
                  Name
                </label>
               <input type="text" className='col-span-4 text-sm text-gray-400 border-gray-400' placeholder='Name' />

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
                Name
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
                  
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
    </div>
  )
}

export default EditSubscription
