import {React , useState} from 'react'
import '../AdminStatistic/AdminStatic.css'
import CardStat from '../AdminStatistic/CardStat'
import ToggleButton from '../AdminStatistic/ToggleButton'
import { Bar} from 'react-chartjs-2';
import 'chart.js/auto';


function RespoStatistiques() {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Visiteurs',
        data: [20, 35, 25, 45, 55, 30],
        backgroundColor: '#003459',
      },
    ],
  });
  return (
  
  <div className='statistics'>
    <div className='sta1'>
       <CardStat name={"Visiteurs"} number={"102"} ></CardStat>
       <CardStat name={"Cout encaissé"} number={"34"} ></CardStat>
    </div>
    <div className='sta2'>
     <p>19 Mars 2023</p>
       <h4>Lieu saturé :</h4>
        <ToggleButton/>
      </div>
      <div className='sta3'>
      <Bar data={chartData }></Bar>
        </div>
      </div>
    
  )
}

export default  RespoStatistiques