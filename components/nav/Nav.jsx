/** @format */

import { useState, useEffect } from "react";
import { userService } from "services";
import DropdownPlasticSurgery from "./Dropdown-PlasticSurgery";
import DropdownAbout  from "./Dropdown-About";
import DropdownSurgeons  from "./Dropdown-Surgeons";
import NoDropDown from './noDropdown';
import DropdownFAQ from './Dropdown-FAQ';
import DropDownContact from './Dropdown-Contact';
export default function Nav() {
  const [user, setUser] = useState(null);



  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  // only show nav when logged in
  // if (!user) return null;

  return (
    // <nav className={"flex items-center justify-between bg-highlight px-3 py-2"}
    // >
    <div className="flex items-center justify-center">
  <div className="flex ">
    <DropdownAbout />
    <DropdownPlasticSurgery />
    <DropdownSurgeons />
    <NoDropDown linkTo="/before-after/page" buttonText="Before & After" />
    <NoDropDown linkTo="/paymentoptions/page" buttonText="Payment Options" />
    <DropdownFAQ buttonText="FAQ" />
    <NoDropDown linkTo="/blog/page" buttonText="Blog" />
    <DropDownContact buttonText="Contact" />
  </div>
</div>

    // </nav>
  );
}
