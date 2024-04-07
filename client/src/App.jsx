import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Graph from "./components/Graph";
import Calendar from "./components/Calendar";
import Members from "./components/Members";
import Settings from "./components/Settings";

import bgimg from "./assets/bgimg.png";
import { useState } from "react";

const App = () => {

  const [activePage, setActivePage] = useState("Dashboard");

  const handleUpdate = (page) => {
    console.log("boobs");
    setActivePage(page);
  }

  return (
    <div className="w-full" style = {{ backgroundImage: `url(${bgimg})` }}>
      <div className="flex ">
        <Navbar onChange = {handleUpdate}/>
        
        {activePage === "Dashboard" && <Dashboard />}
        {activePage === "Graph" && <Graph />}
        {activePage === "Calendar" && <Calendar />}
        
        {activePage === "Members" && <Members />}
        {activePage === "Settings" && <Settings />}
      </div>
    </div>
  );
};
export default App