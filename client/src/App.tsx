import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Remainder, Trash, SignIn, SignUp, SignOut } from "./pages/page";
import { SideBar, NavBar } from "./components/component";
import "./App.css";
import {  useDispatch, useSelector } from "react-redux";


const App = () => {

  const dispatch = useDispatch();
  const {active} = useSelector((store : any) => store.sidebar);

  return (
    <>
      <BrowserRouter>
        <nav className="px-4 py-4 border-b-[1px] border-slate-300 ">
          <NavBar />
        </nav>
        <div className="flex">
          <aside className="w-[300px] mt-5" style={{left : active ? "0" : ""}}>
            <SideBar />
          </aside>

          <main className="flex-1 mt-5">
            <div className="md:container mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reminder" element={<Remainder />} />
                <Route path="/trash" element={<Trash />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signout" element={<SignOut />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
