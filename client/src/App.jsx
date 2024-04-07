import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Graph from "./components/Graph";

const App = () => {
  return (
    <div className="w-full">
      <div className="flex ">
        <Navbar />
        
        <Graph />
      </div>
    </div>
  );
};
export default App