import logo from "../assets/logo.png";
import { RiMenuLine } from "react-icons/ri";
import { SearchBar } from "./component";
import { useEffect, useState } from "react";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {open ,close} from "../features/sidebarSlice";

const NavBar = () => {

  const dispatch = useDispatch();
  const {active} = useSelector((store : any) => store.sidebar);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const cookieString = document.cookie;
    const nameCookie = cookieString
      .split("; ")
      .find((row) => row.startsWith("name="));
    
    if (nameCookie) {
      const userName = nameCookie.split("=")[1];
      setName(userName.charAt(0).toUpperCase());
    }
  }, [name]);

  return (
    <>
      <div className="search-bar flex justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xl" onClick={() => active ? dispatch(close()) : dispatch(open()) }>
            <RiMenuLine />
          </span>
          <img src={logo} alt="logo" width={30} />
          <span className="text-xl hidden md:block">Keep</span>
        </div>
        <div className="search lg:w-[800px] md:w-[400px] ">
          <SearchBar />
        </div>
        <div className="user-setting flex place-items-center gap-3">
          <div className="w-[35px] h-[35px] bg-red-500 grid place-items-center text-xl text-white rounded-[100px]">
            {name}
          </div>
          <Link to="/signout" className="text-xl">
            <PiSignOutBold />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
