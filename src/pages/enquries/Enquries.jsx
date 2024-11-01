import React, { useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { TbEye } from "react-icons/tb";
import ViewEnquries from "./ViewEnquries";

const Enquries = () => {
  const [isModal2, setIsModal2] = useState(false);

  const handleopenViewEnq = () => {
    setIsModal2(true);
  };

  const handleCloseViewEnq = () => {
    setIsModal2(false);
  };

  return (
    <>
      <div>
        <p className="font-Exo my-3 font-semibold text-3xl font">Enquries</p>
        <div className=" overflow-x-auto  no-scrollbar">
        <table className="w-full  items-center overflow-auto ">
          <thead className=" items-center">
            <tr className=" text-end  ">
              <th className=" p-4 font-semibold bg-slate-200 rounded-l-lg ">
                <p className="flex gap-1 items-center">
                  {" "}
                  S.No <HiArrowsUpDown className="text-gray-400" />
                </p>
              </th>

              <th className="font-semibold py-2 bg-slate-200">
                <p className="flex gap-1 items-center">
                  {" "}
                  Name <HiArrowsUpDown className="text-gray-400" />
                </p>
              </th>

              <th className="font-semibold bg-slate-200">
                <p className="flex gap-1 items-center">
                  {" "}
                  Phone Number
                  <HiArrowsUpDown className="text-gray-400"/>
                </p>
              </th>

              <th className="font-semibold items-center px-14 bg-slate-200">
                <p className="flex gap-1 items-center">
                  {" "}
                  Email ID <HiArrowsUpDown className="text-gray-400"/>
                </p>
              </th>

              <th className="font-semibold bg-slate-200">
                <p className="flex gap-1 items-center">
                  {" "}
                  Institution <HiArrowsUpDown className="text-gray-400"/>
                </p>
              </th>

              <th className=" items-center font-semibold pl-12 bg-slate-200">
                <p className="flex gap-1 items-center">
                  {" "}
                  Subjects <HiArrowsUpDown className="text-gray-400" />
                </p>
              </th>

              <th className="items-center font-semibold pl-6 bg-slate-200">
                <p className="flex gap-1 items-center">
                  {" "}
                  Status <HiArrowsUpDown className="text-gray-400"/>
                </p>
              </th>

              

              <th className="font-semibold bg-slate-200 rounded-r-lg">
                <p className="items-center"></p>
              </th>
            </tr>
          </thead>
          <tbody className=" text-start  bg-white ">
            <tr className=" text-sm text-gray-400 border-b-2">
              <td className="py-4 pl-4 ">
                <p>123</p>
              </td>
              <td className="">
                <p>Name</p>
              </td>
              <td className="px-5">
                <p>12345 67890 </p>
              </td>
              <td className="">
                <p>vishvanth202005@gmail.com</p>
              </td>
              <td className="">
                <p>Sathyabama</p>
              </td>
              <td className="text-center ">
                <p>Social Science</p>
              </td>
              <td className=" text-center ">
                <p className="bg-red-200 text-red-700 p-1.5 rounded-lg  text-base font-semibold">
                  Inactive
                </p>
              </td>
              
              <td className="flex justify-center gap-2 items-center mt-1.5">
              <p
                  className="bg-green-100 rounded-md text-green-700 p-1.5"
                  onClick={handleopenViewEnq}
                >
                  <TbEye className="text-2xl " />
                </p>
                <p className="bg-red-200 rounded-md text-red-700  p-1.5 ">
                  {" "}
                  <RiDeleteBin6Line className="text-xl" />
                  
                </p>
               
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className=" m-4 flex justify-between text-sm font-Source_Sans_Pro text-gray-400">
          <p>showing result for 1 out of 1 </p>
          <div className="flex gap-2">
            <p className="flex gap-1 items-center p text-orange">
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
      {isModal2 && <ViewEnquries />}
    </>
  );
};

export default Enquries;
