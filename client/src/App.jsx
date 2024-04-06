import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="w-full">
      <div className="flex ">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};
export default App