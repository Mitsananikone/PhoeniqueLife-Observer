import { useState, useEffect } from "react";
import  NavLink  from "./NavLink";
import { userService } from "services";
import { RenderFAQ } from './RenderFAQ';

export default function DropdownFAQ() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  // only show nav when logged in
  // if (!user) return null;

  


  return (
    <div>
      <div className="group inline-block">
        <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center w-40">
          <span className="pr-1 font-semibold flex-1">FAQ</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-75 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>

        <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute origin-top w-40">
          <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Surgery FAQ</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <RenderFAQ/>
          </li>
          <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <NavLink href="/faq/surgeons-faq/page">Surgeon FAQ </NavLink>
          </li>
          <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <NavLink href="/faq/hospitals-faq/page">Hospital FAQ </NavLink>
          </li>
          <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <NavLink href="/faq/recovery-faq/page">Recovery FAQ </NavLink>
          </li>
          <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <NavLink href="/faq/accomodations-faq/page">Accomodations FAQ </NavLink>
          </li>
          <li className="rounded-sm relative px-5 py-1 hover:bg-gray-100">
            <NavLink href="/faq/travel-faq/page">Travel FAQ </NavLink>
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
