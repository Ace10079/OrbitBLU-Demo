import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Tickets = () => {

  const navigate = useNavigate ();

  const handlenavigate =()=>{
    navigate("/viewtickets");
  }

  return (
    <>
      <div>
        <p className="font-Exo font-semibold text-3xl font">Tickets </p>
        <table className="w-full mt-4 items-center rounded-lg overflow-auto ">
          <thead className="items-center">
            <tr className=" text-end  ">
              <th className="bg-slate-200 p-4 font-semibold rounded-l-lg ">
                <p className="flex gap-1 items-center">
                  {" "}
                  S.No <HiArrowsUpDown  className="text-gray-400" />
                </p>
              </th>

              <th className="bg-slate-200 font-semibold ">
                <p className="flex gap-1 items-center">
                  {" "}
                  Ticket ID <HiArrowsUpDown  className="text-gray-400" />{" "}
                </p>
              </th>

              <th className="bg-slate-200 font-semibold pl-2">
                <p className="flex gap-1 items-center">
                  {" "}
                   Name <HiArrowsUpDown className="text-gray-400"  />
                </p>
              </th>

              <th className=" bg-slate-200 font-semibold pl-14 ">
                <p className="flex gap-1 items-center">
                  {" "}
                  Complaint <HiArrowsUpDown  className="text-gray-400" />
                </p>
              </th>

              <th className="bg-slate-200 font-semibold ">
                <p className="flex gap-1 items-center">
                  {" "}
                  Priority
                  <HiArrowsUpDown className="text-gray-400"  />
                </p>
              </th>

              <th className="font-semibold pl-5 bg-slate-200">
                <p className="flex gap-1  items-center">
                  {" "}
                  Date_Time <HiArrowsUpDown className="text-gray-400"  />
                </p>
              </th>

              <th className=" bg-slate-200 font-semibold ">
                <p className="flex gap-1 pl-6 items-center">
                  {" "}
                  Status <HiArrowsUpDown className="text-gray-400" />
                </p>
              </th>

              <th className="font-semibold  bg-slate-200 rounded-r-lg">
                <p className="items-center pr-5"> Action</p>
              </th>
            </tr>
          </thead>
          <tbody className=" text-start">
            <tr className=" text-sm text-start bg-white text-gray-400 border-b-2">
              <td className="py-3 pl-4 ">
                <p>123</p>
              </td>
              <td className="text-start text-blue-500">
                <p onClick={handlenavigate}>
                  <u>12345</u>
                </p>
              </td>
              <td className="">
                <p>
                  Vishvanath </p>
              </td>

              <td className="text-start pl-4">
                <p>vishvanth202005@gmail.com</p>
              </td>
              <td className="text-start">
                <p>Ravi</p>
              </td>
              
              <td className="text-start">
                <p>18 June 24, 02.23 PM</p>
              </td>
              <td className=" text-center ">
                <p className="bg-violet-100 text-violet-500  rounded-lg p-1 text-base font-semibold">
                  active
                </p>
              </td>
              <td className=" pr-2 pl-12">
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

        <div className="flex justify-center py-3"></div>
      </div>
    </>
  );
};

export default Tickets;
