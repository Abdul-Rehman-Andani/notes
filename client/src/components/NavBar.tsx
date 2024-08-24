import logo from "../assets/logo.png";
import { RiMenuLine } from "react-icons/ri";
import { SearchBar } from "./component";
import { useEffect, useState } from "react";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const NavBar = () => {
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
  }, []);

  return (
    <>
      <div className="search-bar flex justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xl">
            <RiMenuLine />
          </span>
          <img src={logo} alt="logo" width={30} />
          <span className="text-xl">Keep</span>
        </div>
        <div className="search w-[800px]">
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
