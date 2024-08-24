import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  path: string;
  icon: ReactNode;
}

const SideBarItem: React.FC<Props> = ({ name, icon, path }: Props) => {
  return (
    <>
      <NavLink to={path}>
        <li className="px-4 py-3 flex gap-5 items-center">
          <span className="text-xl">{icon}</span>
          {name}
        </li>
      </NavLink>
    </>
  );
};

export default SideBarItem;
