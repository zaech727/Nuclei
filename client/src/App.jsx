import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Graph from "./components/Graph";
import bgimg from "./assets/bgimg.png";

const App = () => {
  return (
    <div className="w-full" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="flex ">
        <Navbar />
        
        <Dashboard />
      </div>
    </div>
  );
};
export default App