import './App.css';
import BarChart from './charts/BarChart';
import DoughnutChart from './charts/DoughnutChart'
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';

function App() {
  return (
    <div className="App">
      <BarChart />
      <br /><hr /><br />
      <DoughnutChart />
      <br /><hr /><br />
      <LineChart />
      <br /><hr /><br />
      <PieChart />
    </div>
  );
}

export default App;
