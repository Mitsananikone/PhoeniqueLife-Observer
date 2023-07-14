/** @format */

import { userService } from "services";
import NavLink from './NavLink';

export default function NoDropDown(props) {
  return (
    <div className="group inline-block">
    <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center w-40">
      <span className="pr-1 font-semibold flex-1">
      <NavLink href={props.linkTo}>{props.buttonText}</NavLink>
      </span>
    </button>
    </div>
        );
        
  }