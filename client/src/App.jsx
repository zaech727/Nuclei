import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Graph from "./components/Graph";
import Members from "./components/Members";
import Settings from "./components/Settings";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import bgimg from "./assets/bgimg.png";
import { useState } from "react";

const App = () => {

  const [activePage, setActivePage] = useState("Dashboard");

  const handleUpdate = (page) => {
    console.log("boobs");
    setActivePage(page);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="w-full bg-secondarypurple bg-fixed" style = {{ backgroundImage: `url(${bgimg})` }}>
      <div className="flex ">
        <Navbar onChange = {handleUpdate}/>
        
        {activePage === "Dashboard" && <Dashboard />}
        {activePage === "Graph" && <Graph />}
        
        {activePage === "Members" && <Members />}
        {activePage === "Settings" && <Settings />}
      </div>
    </div>
    </LocalizationProvider>
  );
};
export default App