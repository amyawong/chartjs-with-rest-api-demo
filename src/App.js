import './App.css';
import BarChart from './charts/BarChart';
import DoughnutChart from './charts/DoughnutChart'

function App() {
  return (
    <div className="App">
      <BarChart />
      <br /><hr /><br />
      <DoughnutChart />
    </div>
  );
}

export default App;
