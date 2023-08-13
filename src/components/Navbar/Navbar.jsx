import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "../Link/Link.jsx";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="bg-purple-400  px-4 ">
      <div onClick={() => setOpen(!open)} className="md:hidden" mb-4>
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6  text-green-800" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-red-500" />
          )}
        </span>
      </div>

      <ul
        className={`  w-full  md:flex  absolute md:static   justify-center duration-500  ease-in  bg-purple-400 pl-8 pb-4  py-2 ${
          open ? "top-6" : "-top-36"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
