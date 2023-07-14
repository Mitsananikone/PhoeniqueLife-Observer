/** @format */

import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { userService } from "services";

export default function DropDownSurgeons() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  // only show nav when logged in
  if (!user) return null;

  const renderAboutDropdown = () => (
    <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-50">
      <li className="px-3 py-1 hover:bg-gray-100">
        <NavLink href="/surgeons/our-surgeons">Our Surgeons</NavLink>
      </li>
      <li className="px-3 py-1 hover:bg-gray-100">
        <NavLink href="/about/our-hospitals">Our Hospitals</NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      <div className="group inline-block">
        <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center w-40">
          <span className="pr-1 font-semibold flex-1">Surgeons</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>

        <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-40">
          <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <NavLink href="/surgeons/our-surgeons">Our Surgeons</NavLink>
              <span className="mr-auto">
              </span>
            </button>
          </li>
          <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <NavLink href="/surgeons/our-hospitals">Our Hospitals</NavLink>
              <span className="mr-auto">
              </span>
            </button>
          </li>
        </ul>
      </div>

      <style>
        {`
        li > ul { transform: translatex(100%) scale(0); }
        li:hover > ul { transform: translatex(101%) scale(1); }
        li > button svg { transform: rotate(-90deg); }
        li:hover > button svg { transform: rotate(-270deg); }
        .group:hover .group-hover\:scale-100 { transform: scale(1); }
        .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg); }
        .scale-0 { transform: scale(0); }
        .min-w-32 { min-width: 8rem; }
      `}
      </style>
    </div>
  );
}
