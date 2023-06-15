import react, {useState} from 'react'
import aa from '../Image/aa.png'




function Navbar() {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
      if (window.innerWidth <= 768) {
        setNav(true);
      } else {
        setNav(false);
      }
    }

       
        window.addEventListener('resize', changeBackground);

        const scrollToSection = (sectionId) => {
          const section = document.getElementById(sectionId);
          section.scrollIntoView({ behavior: 'smooth' });
        };


    return(
     <nav className={nav ? 'nav active' : 'nav'} >
        
       
           <a href='section3' className='logo'>
                <img src={aa} alt=''/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a onClick={() => scrollToSection('section2')} href="#section3">Home</a></li>
                <li> <a onClick={() => scrollToSection('section2')} href="#section2">Features</a></li>
                <li>  <a onClick={() => scrollToSection('section1')} href="#section1">A propos</a></li>
                <li><a href='section3'>Contacts</a></li>
                <li><a href='section3'>Connexion</a></li>
    </ul>
   
    </nav>
        
    )

}
export default Navbar;