import React, { Fragment, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import EditEnquries from './EditEnquries';

const ViewEnquries = () => {
const [isModal,setIsModal]=useState(false)

const handleOpenModal =()=>{
  setIsModal(true);
}

  return (
    <>
    <Fragment>
    <div>
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center  ">
      <div className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro rounded-md m-2">
        <p className="absolute right-2 top-2">
          <IoMdClose
            className="text-xl bg-white "
            
          />
        </p>
        <div className="border-b-2 border-gray-300 mx-10">
          <h1 className="text-xl font-medium text-center pt-10 font-Exo pb-2">
            View Enquries
          </h1>
        </div>

        <form>
          <div className="grid grid-cols-6  mx-10 my-10">
            <label
              className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal mb-4"
              htmlFor="name"
            >
              Name
            </label>
            <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
              Sathayabama
            </p>

            <label
              className="block col-span-2  text-gray-900 text-base font-normal mb-4"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
             00000 00000
            </p>

            <label
              className="block col-span-2  text-gray-900 text-base font-normal mb-4"
              htmlFor="email"
            >
              Email ID
            </label>
            <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
              vishvanath@gmail.com
            </p>

            <label
              className="block col-span-2  text-gray-900 text-base font-normal mb-4"
              htmlFor="institution"
            >
              Institution
            </label>
            <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
              Chennai
            </p>

            <label
              className="block col-span-2  text-gray-900 text-base font-normal mb-4"
              htmlFor="subject"
            >
              Subject
            </label>
            <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
              Name
            </p>

            <label
              className="block col-span-2  text-gray-900 text-base font-normal mb-4"
              htmlFor="status"
            >
              Status
            </label>
           <div className="col-span-4 flex justify-end  ">
           <p className="  bg-green-200  h-fit px-3 te text-green-600 rounded-md font-Source_Sans_Pro">
             Active
            </p>
           </div>

            <label
              className="block col-span-2  text-gray-900 text-base font-normal mb-4"
              htmlFor="date"
            >
              date
            </label>
            <p className="col-span-4 text-end text-gray-400 font-Source_Sans_Pro">
              Ravi
            </p>

            <label
              className="block col-span-2  text-gray-900 text-base font-normal mb-4"
              htmlFor="note"
            >
              Note
            </label>
            <p className="col-span-4 text-end text-gray-400 text-sm font-Source_Sans_Pro">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt consectetur commodi ut sint quae impedit ullam atque doloremque, ex labore deleniti architecto veniam vero quasi exercitationem. Aperiam, velit voluptatibus.
            </p>
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
{isModal && <EditEnquries/>}
  </>
  )
}

export default ViewEnquries
