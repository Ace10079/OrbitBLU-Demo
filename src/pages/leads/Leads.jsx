import React from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import HeaderButton from "../../components/HeaderButton";
import AddLeads from "./AddLeads";

const Leads = () => {
  const hasCreatePermission = "create";
  const [isModal, setIsModal] = useState(false);
  const [isModal1, setIsModal1] = useState(false);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal1(false);
  };
  return (
    <>
    <div>
      <div className="flex my-3 justify-between  items-center">
        <p className="font-Exo font-semibold text-3xl font">Leads</p>
        <HeaderButton
          title="leads"
          hasCreatePermission={hasCreatePermission}
          onClick={handleOpenModal}
        />
      </div>
      <table className="w-full  items-center rounded-lg overflow-auto ">
        <thead className="items-center">
          <tr className=" text-end  ">
            <th className="bg-slate-200 p-4 font-semibold rounded-l-lg ">
              <p className="flex gap-1 items-center">
                {" "}
                S.No <HiArrowsUpDown className="text-gray-400" />
              </p>
            </th>

            <th className="bg-slate-200 font-semibold ">
              <p className="flex gap-1 items-center">
                {" "}
                Date & Time <HiArrowsUpDown className="text-gray-400" />{" "}
              </p>
            </th>

            <th className="bg-slate-200 font-semibold pl-2">
              <p className="flex gap-1 items-center">
                {" "}
                Name <HiArrowsUpDown className="text-gray-400" />
              </p>
            </th>

            <th className=" bg-slate-200 font-semibold pl-14 ">
              <p className="flex gap-1 items-center">
                {" "}
                Phone Number <HiArrowsUpDown className="text-gray-400" />
              </p>
            </th>

            <th className="bg-slate-200 font-semibold ">
              <p className="flex gap-1 items-center">
                {" "}
                Follow-up
                <HiArrowsUpDown className="text-gray-400" />
              </p>
            </th>

            <th className="font-semibold bg-slate-200">
              <p className="flex gap-1 items-center">
                {" "}
                Status <HiArrowsUpDown className="text-gray-400" />
              </p>
            </th>

            <th className="font-semibold bg-slate-200 pr-9 rounded-r-lg">
              <p className="items-center ">Action</p>
            </th>
          </tr>
        </thead>
        <tbody className=" text-start">
          <tr className=" text-sm text-start bg-white text-gray-400 border-b-2">
            <td className="py-3 pl-4 ">
              <p>123</p>
            </td>
            <td className="">
              <p>18 June 24, 02.23 PM</p>
            </td>
            <td className="px-4">
              <p>Ravi </p>
            </td>

            <td className="pl-20">
              <p>00000 00000</p>
            </td>
            <td className="px-6">
              <p>Ravi</p>
            </td>

            <td className=" text-center ">
              <p className="bg-red-100 text-red-500  rounded-lg px-3 p-1.5 w-fit text-base font-semibold">
                active
              </p>
            </td>
            <td className=" flex items-center justify-center pt-1.5">
              <p className="bg-red-200 rounded-md text-red-700  p-1.5">
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
    {isModal && <AddLeads/>}
    </>
  );
};

export default Leads;
