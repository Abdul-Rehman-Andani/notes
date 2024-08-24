import {SideBarItem} from "./component"; 
import { MdOutlineLightbulb } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";

const SideBar : React.FC = () => {
  return (
    <>
      <ul>
        <SideBarItem name={`Home`} icon={<MdOutlineLightbulb />} path={`/`}/>
        <SideBarItem name={`Reminders`} icon={<BiBell />} path={`/reminder`} />
        <SideBarItem name={`Trash`} icon={<IoTrashOutline />} path={`/trash`} />
      </ul>
    </>
  )
}

export default SideBar;
