import { useState } from "react";
import Log from "./Log";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Works" },
    { id: 5, text: "Contact" },
  ];
  
  return (
    <div className="bg-[#000300] border-b z-50 border-b-gray-600 fixed left-0 right-0">
      <header className="flex cursor-pointer  text-white items-center mx-auto max-w-screen-xl px-4 justify-between h-20">
        <Log />
        <ul className="hidden uppercase lg:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id} className="p-4 hover:text-[#00df9a]">
              {item.text}
            </li>
          ))}
        </ul>
        <div onClick={() => setOpen(!open)} className="block lg:hidden">
          {open ? (
            <XMarkIcon className="h-8 w-8 text-white" />
          ) : (
            <Bars3CenterLeftIcon className="h-8 w-8 text-white" />
          )}
        </div>
        <div
          className={`fixed mt-20 inset-x-0 top-0 h-full bg-[#000300] ease-in-out duration-500 overflow-hidden ${
            open ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <ul className="uppercase p-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 border-b border-b-gray-600 cursor-pointer hover:text-[#00df9a]"
                onClick={() => setOpen(false)}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
