import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is set up in your project

const ViewInterview = ({ closed }) => {
  const [showModal1, setShowModal1] = useState(true);
  const [showModal2, setShowModal2] = useState(false);

  const openModal2 = () => {
    setShowModal1(false);
    setShowModal2(true);
  };

  const closeModals = () => {
    setShowModal1(false);
    setShowModal2(false);
  };

  return (
    <div className="p-4">
      {/* Modal 1 with Form in Grid */}
      {showModal1 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center "
          onClick={closeModals}
        >
          <div
            className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro rounded-md m-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <p
                className="text-gray-500 p-3 rounded-full shadow-lg -m-3 bg-white w-fit items-center"
                onClick={closeModals}
              >
                ✖
              </p>
            </div>
            <div className=" border-b-2 border-gray-300 mx-10 p-4">
              <h1 className="font-semibold font-Exo text-2xl text-center">
                View Enquries
              </h1>
            </div>
            <div className="p-4">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati incidunt consectetur commodi ut sint quae impedit
                    ullam atque doloremque, ex labore deleniti architecto veniam
                    vero quasi exercitationem. Aperiam, velit voluptatibus.
                  </p>
                </div>
                <div className=" flex justify-center gap-1 mb-4 ">
                  <button className="border border-orange text-orange px-8 py-2 rounded-md">
                    Cancel
                  </button>
                  <button
                    className="bg-orange text-white px-9 rounded-md"
                    onClick={openModal2}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2 */}
      {showModal2 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center "
          onClick={closeModals}
        >
          <div
            className="bg-white w-[522px] h-fit relative font-Source_Sans_Pro rounded-md m-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <p
                className="text-gray-500 p-3 rounded-full shadow-lg -m-3 bg-white w-fit items-center"
                onClick={closeModals}
              >
                ✖
              </p>
            </div>
            <div className=" border-b-2 border-gray-300 mx-10 p-4">
              <h1 className="text-2xl font-semibold text-center  font-Exo">
                Edit Enquries
              </h1>
            </div>
            <div className="p-4">
              <form>
                <div className="grid grid-cols-6  mx-10 my-10">
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="package_name"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="pricing"
                  >
                    Email Id
                  </label>
                  <input
                    type="email"
                    placeholder="vishva234@gamail.com"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="institution"
                  >
                    Institution
                  </label>
                  <input
                    type="text"
                    placeholder="Sathyabama"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    placeholder="Active"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="date"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    placeholder="12th June 2024"
                    className="border-2 col-span-4 rounded-lg mb-2 py-1.5 px-2"
                  />
                  <label
                    className="block col-span-2 font-Source_Sans_Pro text-gray-900 text-base font-normal py-1.5"
                    htmlFor="last_update"
                  >
                    Desctiption
                  </label>

                  <textarea
                    name="description"
                    id="description"
                    placeholder=" Lorem ipsum dolor, sit amet consectetur adipisicing elit.nam magni commodi impedit perspiciatis, distinctio itaque sint officiis!"
                    className="border-2 col-span-4 rounded-lg h-40 mb-2 py-1.5 px-2"
                  >
                   
                  </textarea>
                </div>
                <div className=" flex justify-center gap-1 mb-4 ">
                  <button className="border border-orange text-orange px-8 py-2 rounded-md">
                    Cancel
                  </button>
                  <button
                    className="bg-orange text-white px-9 rounded-md"
                    onClick={closed}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ViewInterview;
