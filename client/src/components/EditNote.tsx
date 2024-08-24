import { Model } from "./component";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { close } from "../features/modelSlice";

const EditNote = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Model>
        <span
          className="text-white text-3xl absolute right-10 top-10"
          onClick={() => dispatch(close())}
        >
          <RxCross2 />
        </span>
      </Model>
    </>
  );
};

export default EditNote;
