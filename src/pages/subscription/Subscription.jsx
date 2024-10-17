import React, { useState } from "react";
import HeaderButton from "../../components/HeaderButton";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import ViewSubscription from "./ViewSubscription";

const Subscription = () => {
  const hasCreatePermission = "create";
  const [isModal, setIsModal] = useState(false);

  const handleOpenModal = () => {
    setIsModal(true);
  };
  return (
    <>
    <div>
      <div className="flex my-3 justify-between  items-center">
        <p className="font-Exo font-semibold text-3xl font">Subscription</p>
        <HeaderButton
          title="Subscription"
          hasCreatePermission={hasCreatePermission}
          
        />
      </div>
      <table className="w-full mt-4 items-center rounded-lg overflow-auto ">
          <thead className="items-center">
            <tr className=" text-end  ">
              <th className="bg-slate-200 p-4 font-semibold rounded-l-lg ">
                <p className="flex gap-1 items-center">
                  {" "}
                  S.No <HiArrowsUpDown className="text-gray-400"/>
                </p>
              </th>

              <th className="bg-slate-200 font-semibold ">
                <p className="flex gap-1 items-center">
                  {" "}
                  Subscription ID <HiArrowsUpDown className="text-gray-400"/>{" "}
                </p>
              </th>

              <th className="bg-slate-200 font-semibold px-3">
                <p className="flex gap-1 items-center">
                  {" "}
                   Name <HiArrowsUpDown className="text-gray-400"/>
                </p>
              </th>

              <th className=" bg-slate-200 font-semibold px-4 ">
                <p className="flex gap-1 items-center">
                  {" "}
                  Category <HiArrowsUpDown className="text-gray-400"/>
                </p>
              </th>

              <th className="bg-slate-200 font-semibold px-3 ">
                <p className="flex gap-1 items-center">
                  {" "}
                  Date & Time
                  <HiArrowsUpDown className="text-gray-400" />
                </p>
              </th>

              <th className="font-semibold pl-5 bg-slate-200 px-2">
                <p className="flex gap-1  items-center">
                  {" "}
                  Payment Mode <HiArrowsUpDown className="text-gray-400"/>
                </p>
              </th>

              <th className="font-semibold pl-5 bg-slate-200">
                <p className="flex gap-1  items-center">
                  {" "}
                  Transaction Details<HiArrowsUpDown className="text-gray-400" />
                </p>
              </th>

              <th className=" bg-slate-200 font-semibold px-3">
                <p className="flex gap-1  items-center">
                  {" "}
                  Status 
                </p>
              </th>

              <th className="font-semibold  bg-slate-200 rounded-r-lg px-5">
                <p className="items-center "> Action</p>
              </th>
            </tr>
          </thead>
          <tbody className=" text-start">
            <tr className=" text-sm text-start bg-white text-gray-400 border-b-2">
              <td className="py-3 px-4 ">
                <p>1</p>
              </td>
              <td className="px-3 text-blue-500">
                <p onClick={handleOpenModal}>
                  <u>12345</u>
                </p>
              </td>
              <td className="">
                <p>
                  Vishvanath </p>
              </td>

              <td className="text-start px-6">
                <p>Category</p>
              </td>

              <td className="text-start">
                <p>18 June 24, 02.23 PM</p>
              </td>
              <td className="text-center">
                <p>Payment</p>
              </td>

              <td className="text-center">
                <p>Name</p>
              </td>
              
              
              <td className=" text-center px-2 mx-2 ">
                <p className="bg-red-100 text-red-500 text-center  rounded-lg p-1 text-base font-semibold">
                  active
                </p>
              </td>
              <td className=" px-6">
                <p className="bg-red-200 rounded-md text-red-700 w-fit items-center  p-1.5">
                  {" "}
                  <RiDeleteBin6Line className="text-lg" />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className=" m-4 flex justify-between text-sm font-Source_Sans_Pro text-gray-400">
          <p>showing result for 1 out of 1 </p>
          <div className="flex gap-2">
            <p className="flex gap-1 items-center text-orange">
              <GoArrowLeft /> Previous
            </p>
            <div className="flex items-center gap-4">
              <p className="bg-orange px-2 p-0.5 rounded-md text-white">1</p>
              <p>2</p>
              <p>3</p>
              <p>...</p>
            </div>
            <p className="flex gap-1 items-center text-orange">
              Next
              <GoArrowRight />
            </p>
          </div>
        </div>
    </div>
    {isModal && <ViewSubscription/>}
    </>
  );
};

export default Subscription;
