import React from "react";
import {useNavigate} from "react-router-dom"
import { IoCameraOutline } from "react-icons/io5";
import { LuSendHorizonal } from "react-icons/lu";

const ViewTickets = () => {
  const navigate = useNavigate();
  const change=()=>{
    navigate("/tickets");
  }
  return (
    <div className="overflow-auto">
      <div className="flex justify-between items-center my-5 ">
        <div className="">
          <p className="font-Exo text-2xl font-semibold">Ticktes</p>
        </div>
        <div className="flex gap-2 items-center font-Source_Sans_Pro">
          <p className="text-gray-400">Assigned ticket</p>
          <select
            className="px-3 p-1 text-gray-400 bg-background border outline-none rounded-lg"
            name="name"
            id="name"
          >
            <option defaultValue="vishva">Vishva</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 ">
        <div className=" col-span-12 md:col-span-6 bg-white px-8 py-4 rounded-lg shadow-lg">
          <div className="flex justify-between  items-center my-5">
            <label className="col-span-4 md:col-span-2 font-medium ">Ticket Id</label>
            <p className="col-span-8 md:col-span-4 text-gray-400 ">#123455</p>
          </div>
          <div className="flex justify-between items-center  my-5">
            <label className="col-span-4 md:col-span-2 font-medium">Name</label>
            <p className="col-span-8 md:col-span-4 text-gray-400 ">Vishva</p>
          </div>
          <div className="flex justify-between items-center  my-5">
            <label className="col-span-4 md:col-span-2 font-medium">Complaint</label>
            <p className="col-span-8 md:col-span-4 text-gray-400 ">Name</p>
          </div>
          <div className="flex justify-between items-center  my-5">
            <label className="col-span-4 md:col-span-2 font-medium">Priority</label>
            <p className="col-span-8 md:col-span-4 text-gray-400 ">High</p>
          </div>
          <div className="flex justify-between items-center  my-5">
            <label className="col-span-4 md:col-span-2 font-medium">Date & Time</label>
            <p className="col-span-8 md:col-span-4 text-gray-400 ">18 June 24, 02.23 PM</p>
          </div>
          <div className="flex justify-between items-center my-5">
            <label className="col-span-4 md:col-span-2 font-medium">Status</label>
            <p className="col-span-8 md:col-span-4 px-3 py-0.5 bg-green-100 text-green-600 rounded-lg">
              Active
            </p>
          </div>
          <div className="flex justify-between items-center my-5">
            <label className="col-span-4 md:col-span-2 font-medium">Note</label>
            <p className="col-span-8 md:col-span-4 text-gray-400 text-base text-end w-96">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              doloremque delectus maiores corrupti voluptate architecto placeat
              perspiciatis dolorum voluptates impedit.
            </p>
          </div>
          <div className="flex justify-between gap-3  items-center my-4 ">
            <label className=" font-medium">Replay</label>
            <div className="flex items-center text-end p-2 border rounded-lg w-full gap-2">
              <input type="text" className="outline-none w-full" />
              <p className="hover:bg-gray-300 hover:rounded-full hover:p-1.5">
                <IoCameraOutline className="text-2xl hover:text-orange" />
              </p>
              <p className="hover:bg-gray-300 hover:rounded-full hover:p-1.5 ">
                <LuSendHorizonal className="text-xl hover:text-orange" />
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-12 md:col-span-6 bg-white rounded-lg shadow-lg ">
          <p className="md:col-span-6 col-span-12 text-xl font-medium bg-gray-200 rounded-t-lg px-3 py-3">Complaint History</p>
          <div className="flex justify-between gap-3  items-center my-8 mx-3">
            <p className="md:col-span-3 col-span-6 text-base">18 June 24, 02.23 PM</p>
            <p className="md:col-span-3 col-span-6 text-gray-400 w-[350px] text-center border-l-2 text-base font-Source_Sans_Pro">Work Assigned to Thiru. P. Sivapatham</p>
          </div>
          <div className="flex justify-between gap-3  items-center my-8 mx-3">
            <p className="md:col-span-3 col-span-6  text-base">18 June 24, 02.23 PM</p>
            <p className="md:col-span-3 col-span-6 text-gray-400 w-[350px] text-center border-l-2 text-base font-Source_Sans_Pro">Work Assigned to Thiru. P. Sivapatham</p>
          </div>
          <div className="flex justify-between gap-3  items-center my-8 mx-3">
            <p className="md:col-span-3 col-span-6  text-base">18 June 24, 02.23 PM</p>
            <p className="md:col-span-3 col-span-6 text-gray-400 w-[350px] text-center border-l-2 text-base font-Source_Sans_Pro">Work Assigned to Thiru. P. Sivapatham</p>
          </div>
          <div className="flex justify-between gap-3  items-center my-8 mx-3">
            <p className="md:col-span-3 col-span-6 text-base">18 June 24, 02.23 PM</p>
            <p className="col-span-3 text-gray-400 w-[350px] text-center border-l-2 text-base font-Source_Sans_Pro">Work Assigned to Thiru. P. Sivapatham</p>
          </div>
          <div className="flex justify-between gap-3  items-center my-8 mx-3">
            <p className="md:col-span-3 col-span-6  text-base">18 June 24, 02.23 PM</p>
            <p className="md:col-span-3 col-span-6 text-gray-400 w-[350px] text-center border-l-2 text-base font-Source_Sans_Pro">Work Assigned to Thiru. P. Sivapatham</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <button className="px-4 py-1.5 rounded-md text-white mt-8  bg-orange" onClick={change}>Submit</button>
      </div>
    </div>
  );
};

export default ViewTickets;
