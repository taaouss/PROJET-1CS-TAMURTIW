import {React , useState}from 'react'
import './AdminGestion.css'
import Evenements from './GestionEvenements/Evenements';
import Informations from './GestionInformations/Informations';

function AdminGestion() {
    const data=[{
        dateDebut:'20 Mars 2023',
        dateFin:'20 Avril 2023',
        gratuite:0,
        titre:'La fête du printemps',
        paragraphe:"Cet événement célèbre l'arrivée du printemps dans la région de Yakouren. Les habitants de la ville se réunissent pour participer à des activités traditionnelles telles que la danse et la musique, ainsi que pour déguster des plats locaux préparés pour l'occasion. La fête comprend également des compétitions sportives et des spectacles de rue mettant en vedette des artistes locaux"
    },
    {
        dateDebut:'03 Aout 2023',
        dateFin:'20 Avril 2024',
        gratuite:140,
        titre:'L’évenement du Tapis',
        paragraphe:" Cet événement met en avant l'artisanat local et les tapis berbères de la région. Les visiteurs peuvent admirer les œuvres d'art colorées et complexes, ainsi que participer à des ateliers pour apprendre à tisser un tapis berbère traditionnel. Il y a également des spectacles de musique et de danse traditionnelles, ainsi que des stands de nourriture proposant des plats locaux et des spécialités culinaires de la région."
    },
    {
        dateDebut:'20 Novembre 2023',
        dateFin:'20 Avril 2024',
        gratuite:500,
        titre:'Le festival de la culture',
        paragraphe:"Yakouren est une ville connue pour sa riche culture amazighe. Un festival de la culture amazighe serait donc un événement approprié pour célébrer cette culture locale. Le festival comprendrait des présentations de musique traditionnelle, des expositions d'art et d'artisanat amazigh, des ateliers de cuisine amazighe, des conférences sur l'histoire et la culture amazighes et des spectacles de danse amazighe. Ce serait une occasion pour les gens de la région et les visiteurs de découvrir et d'apprécier la culture amazighe unique de Yakouren."
    }];
    const [activSection, setActiveSection] = useState('Evenements');
    const handleButtonClick = (element) => {
      setActiveSection(element);
    };
  return (
    <div>
        <div className='sections'>
        <button  className={`section ${activSection === 'Evenements' ? 'sectionCliquee' : ''}`} onClick={() => handleButtonClick('Evenements')}  >Evenements</button>
        <button  className={`section ${activSection === 'Informations' ? 'sectionCliquee' : ''}`} onClick={() => handleButtonClick('Informations')}> Informations</button>
        </div>
        {activSection=== 'Evenements' && <div> <Evenements data={data}/> </div>}
        {activSection === 'Informations' && <div><Informations></Informations></div>}
       
    </div>
  )
}

export default AdminGestion