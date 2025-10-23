import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import dairy from "../../assets/dairy.jpg";

const OwnerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {/* // Navbar */}
      <nav className="p-3 flex justify-between items-center">
        <a href="#" id="d1" className="flex gap-2 items-center">
          <img
            src={dairy}
            alt="logo"
            className="max-h-10 max-w-12 object-cover "
          />
          <span className="text-lg font-medium font-display"> ToDoBar</span>
        </a>
        <div id="nav-menu" className="hidden lg:flex gap-12">
          <a href="#" className="font-medium hover:text-primary">
            Pricing
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Docs
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Login
          </a>
          <a href="#" className="font-medium hover:text-primary">
            About
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Contact
          </a>
        </div>

        <button className="hidden lg:flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
          <img src={dairy} className="max-w-12 max-h-12" />
          <span>Electro fit</span>
        </button>

        <button onClick={toggleSidebar} className="p-2 lg:hidden">
          <FaBars size={24} className="text-gray-600" />
        </button>

        {isSidebarOpen && (
          <div className="fixed z-10 md:hidden bg-red-500 bg-opacity-30 inset-0 p-3">
            <div className="flex justify-between">
              <a href="#" id="d1" className="flex gap-2 items-center">
                <img
                  src={dairy}
                  alt="logo"
                  className="max-h-10 max-w-12 object-cover "
                />
                <span className="text-lg font-medium font-display">
                  {" "}
                  ToDoBar
                </span>
              </a>
              <button onClick={toggleSidebar} className="p-2 md:hidden">
                <FaBars size={24} className="text-gray-600" />
              </button>
            </div>

            <div className=" mt-6">
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-s-lg"
              >
                Pricing
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-s-lg"
              >
                Docs
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-s-lg"
              >
                Login
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-s-lg"
              >
                About
              </a>
              <a
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-s-lg"
              >
                Contact
              </a>
            </div>
            <div className="h-[1px] bg-gray-700"></div>

            <button className="mt-6 py-4 w-full flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600 hover:bg-gray-400">
              <img src={dairy} className="max-w-12 max-h-12" />
              <span>Electro fit</span>
            </button>
          </div>
        )}
      </nav>

      {/* MAIN SECTION */}
      <main>
        <div className="bg-gradient-to-br from-purple-100 via-orange-100 to-transparent min-h-screen">
          <div className="max-w-4xl bg-red-300 mx-auto px-6 pb-32 flex flex-col">
            {/* version */}
            <div className="flex my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-3 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 group">
              <div className="w-2 h-2 bg-yellow-400 rounded-full border-yellow-600F"></div>
              <p className="font-display font-medium text-yellow-600">
                V0:21:01<span className="text-yellow-800">Find-in -page bug fixes</span>
              </p>
              <h1 className="text-yellow-600 group-hover:translate-x-1 transition duration-300">h2</h1>
            </div>
            <h1 className="text-4xl font-display font-semibold leading-snug mt-4 "> Web app to deskto app in minutes</h1>
            <p className="text-xl mt-4"> Take your web base cod and transform into a cross platform desktop app with native fuction</p>
            <div className=" flex flex-col mt-12 sm:flex-row gap-4">
            <button className="px-8 py-3 font-semibold rounded-lg bg-primary text-white shadow-sm hover:bg-opacity-90">Download Now</button>
            <button className="font-semibold rounded-lg border border-gray-400 bg-white py-3 px-8 hover:border-gray-400">Read Docs</button>
          </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OwnerLayout;
