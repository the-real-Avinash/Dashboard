import "./App.css";
import Navbar from "./components/Navbar/Index";
import ProjectStat from "./components/ProjectStat/Index";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import DailyStatus from "./components/DailyStatus/Index";

Chart.register(CategoryScale);

function App() {
  return (
    <>
      <Navbar />
      <ProjectStat />
      <DailyStatus />
    </>
  );
}

export default App;
