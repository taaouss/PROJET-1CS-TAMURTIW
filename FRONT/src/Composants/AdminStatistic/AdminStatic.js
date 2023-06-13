import {React , useState} from 'react'
import './AdminStatic.css'
import CardStat from './CardStat'
import ToggleButton from './ToggleButton'
import { Bar, Radar} from 'react-chartjs-2';
import 'chart.js/auto';


function AdminStatic() {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Visiteurs',
        data: [20, 35, 25, 45, 55, 30],
        fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
      },
    ],
  });
 const data={
    labels: ['dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
    datasets: [
      {
        label: 'Visiteurs',
        data: [20, 35, 45, 25, 55, 65],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      },
    ],
  }
  const [activeElement, setActiveElement] = useState('Bar');

  const handleButtonClick = (element) => {
    setActiveElement(element);
  };
  return (
  
  <div className='statistics'>
    <div className='sta1'>
       <CardStat name={"Employés"} number={"34"} ></CardStat>
       <CardStat name={"Visiteurs"} number={"34"} ></CardStat>
       <CardStat name={"Cout encaissé"} number={"34"} ></CardStat>
    </div>
    <div className='sta2'>
     <p>19 Mars 2023</p>
       <h4>Lieu saturé :</h4>
        <ToggleButton/>
      </div>
      <div className='sta3'>
      <button  className={`bouton1 ${activeElement === 'Bar' ? 'boutonClique' : ''}`} onClick={() => handleButtonClick('Bar')}  >modele 1 </button>
      <button  className={`bouton1 ${activeElement === 'Radar' ? 'boutonClique' : ''}`} onClick={() => handleButtonClick('Radar')}> modele 2</button>
      {activeElement === 'Bar' && <div>  <Bar data={chartData }></Bar></div>}
      {activeElement === 'Radar' && <div className='radar'> <Radar data={data }></Radar></div>}
     
       </div>
      </div>
    
  )
}

export default AdminStatic