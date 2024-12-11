import {SideBarItem} from "./component"; 
import { MdOutlineLightbulb } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdOutlineCloudDone } from "react-icons/md";


const SideBar : React.FC = () => {
  return (
    <>
      <ul>
        <SideBarItem name={`Home`} icon={<MdOutlineLightbulb />} path={`/`}/>
        <SideBarItem name={`Reminders`} icon={<BiBell />} path={`/reminder`} />
        <SideBarItem name={`Completed`} icon={<MdOutlineCloudDone />} path={`/completed`} />
      </ul>
    </>
  )
}

export default SideBar;
