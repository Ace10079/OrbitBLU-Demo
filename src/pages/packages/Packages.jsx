import React, { useState } from "react";
import HeaderButton from "../../components/HeaderButton";
import { MdOutlineEdit } from "react-icons/md";
import AddPackages from "./AddPackages";
import EditPackages from "./EditPackages";

const Packages = () => {
  const hasCreatePermission = "create";
  const [isModal, setIsModal] = useState(false);
  const [isModal1,setIsModal1] =useState(false);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleOpenEdit =() =>{
    setIsModal1(true);
  }

  return (
    <>
      <div>
        <div className="flex my-3 justify-between  items-center">
          <p className="font-Exo font-semibold text-3xl font">Packages</p>
          <HeaderButton
            title="Packages"
            hasCreatePermission={hasCreatePermission}
            onClick={handleOpenModal}
          />
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 p-4 py-6 rounded-lg border-2  shadow-lg  font-Source_Sans_Pro bg-white">
            <div className=" flex justify-between py-2">
              <p className="bg-violet-100 text-center text-violet-500 w-20 rounded-lg p-1 text-base font-semibold">
                active
              </p>
              <p
                className="bg-green-200 w-fit p-1 rounded-md "
                onClick={handleOpenEdit}
              >
                <MdOutlineEdit className=" text-green-800 text-xl " />
              </p>
            </div>
            <div className="grid grid-cols-10 my-4 text-xs">
              <label htmlFor="package_ID" className="my-2 col-span-4">
                {" "}
                Package Id:
              </label>
              <p className="col-span-6 text-start my-2 ">Name</p>
              <label htmlFor="package_Name" className="col-span-4 my-2 ">
                {" "}
                Package Name:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="pricing" className="col-span-4 my-2 ">
                {" "}
                Pricing:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="credits" className="col-span-4 my-2 ">
                {" "}
                Credit:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="description" className="col-span-4 my-2 ">
                {" "}
                Description:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label
                htmlFor="last_update"
                className="col-span-4  mt-6 font-bold"
              >
                {" "}
                Last Update
              </label>
              <p className="col-span-6 text-start text-gray-400 mt-6 ">
                18th June 24,02:23 PM
              </p>
            </div>
          </div>
          <div className="col-span-3 p-4 py-6 rounded-lg border-2 shadow-lg font-Source_Sans_Pro bg-white">
            <div className=" flex justify-between py-2">
              <p className="bg-violet-100 text-center text-violet-500 w-20 rounded-lg p-1 text-base font-semibold">
                active
              </p>
              <p className="bg-green-200 w-fit p-1 rounded-md">
                <MdOutlineEdit className=" text-green-800 text-xl " />
              </p>
            </div>
            <div className="grid grid-cols-10 my-4 text-xs">
              <label htmlFor="package_ID" className="my-2 col-span-4">
                {" "}
                Package Id:
              </label>
              <p className="col-span-6 text-start my-2 ">Name</p>
              <label htmlFor="package_Name" className="col-span-4 my-2 ">
                {" "}
                Package Name:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="pricing" className="col-span-4 my-2 ">
                {" "}
                Pricing:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="credits" className="col-span-4 my-2 ">
                {" "}
                Credit:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="description" className="col-span-4 my-2 ">
                {" "}
                Description:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label
                htmlFor="last_update"
                className="col-span-4  mt-6 font-bold"
              >
                {" "}
                Last Update
              </label>
              <p className="col-span-6 text-start text-gray-400 mt-6 ">
                18th June 24,02:23 PM
              </p>
            </div>
          </div>
          <div className="col-span-3 p-4 py-6 rounded-lg border-2   shadow-lg font-Source_Sans_Pro bg-white">
            <div className=" flex justify-between py-2">
              <p className="bg-violet-100 text-center text-violet-500 w-20 rounded-lg p-1 text-base font-semibold">
                active
              </p>
              <p className="bg-green-200 w-fit p-1 rounded-md">
                <MdOutlineEdit className=" text-green-800 text-xl " />
              </p>
            </div>
            <div className="grid grid-cols-10 my-4 text-xs">
              <label htmlFor="package_ID" className="my-2 col-span-4">
                {" "}
                Package Id:
              </label>
              <p className="col-span-6 text-start my-2 ">Name</p>
              <label htmlFor="package_Name" className="col-span-4 my-2 ">
                {" "}
                Package Name:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="pricing" className="col-span-4 my-2 ">
                {" "}
                Pricing:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="credits" className="col-span-4 my-2 ">
                {" "}
                Credit:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="description" className="col-span-4 my-2 ">
                {" "}
                Description:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label
                htmlFor="last_update"
                className="col-span-4  mt-6 font-bold"
              >
                {" "}
                Last Update
              </label>
              <p className="col-span-6 text-start text-gray-400 mt-6 ">
                18th June 24,02:23 PM
              </p>
            </div>
          </div>
          <div className="col-span-3 p-4 py-6 rounded-lg border-2  shadow-lg  font-Source_Sans_Pro bg-white">
            <div className=" flex justify-between py-2">
              <p className="bg-violet-100 text-center text-violet-500 w-20 rounded-lg p-1 text-base font-semibold">
                active
              </p>
              <p className="bg-green-200 w-fit p-1 rounded-md">
                <MdOutlineEdit className=" text-green-800 text-xl " />
              </p>
            </div>
            <div className="grid grid-cols-10 my-4 text-xs">
              <label htmlFor="package_ID" className="my-2 col-span-4">
                {" "}
                Package Id:
              </label>
              <p className="col-span-6 text-start my-2 ">Name</p>
              <label htmlFor="package_Name" className="col-span-4 my-2 ">
                {" "}
                Package Name:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="pricing" className="col-span-4 my-2 ">
                {" "}
                Pricing:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="credits" className="col-span-4 my-2 ">
                {" "}
                Credit:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label htmlFor="description" className="col-span-4 my-2 ">
                {" "}
                Description:
              </label>
              <p className="col-span-6 text-start  my-2 ">Name</p>
              <label
                htmlFor="last_update"
                className="col-span-4  mt-6 font-bold"
              >
                {" "}
                Last Update
              </label>
              <p className="col-span-6 text-start text-gray-400 mt-6 ">
                18th June 24,02:23 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      {isModal && <AddPackages/>}
      {isModal1 && <EditPackages/>}
    </>
  );
};

export default Packages;
