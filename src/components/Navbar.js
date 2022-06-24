import React from 'react';
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.webp";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Exercises", href: "/exercises" },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="relative bg-transparent z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Start Nav */}
              {/* Start Logo */}
              <div className="flex-shrink-0 flex items-center px-2 sm:px-0">
              <Link to="/"> <img className=" h-8 w-auto" src={Logo} alt="Workflow" /></Link>
              </div>
              {/* End Logo */}
              <div className="flex-1 flex items-center justify-center">
                {/* Start Navigation */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-white hover:text-main-color duration-300 px-3 py-2 rounded-md text-md font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* End Navigation */}
              </div>
              {/* End Nav */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/*Start Main Menu Button*/}
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-secondary-dark">
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/*End Main Menu Button*/}
              </div>
            </div>
          </div>
          {/* Use this action Navigation Responsive */}
          <Disclosure.Panel className="sm:hidden z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-white hover:text-main-color  hover:bg-gray-50 duration-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
