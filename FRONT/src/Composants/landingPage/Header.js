import react from 'react'
import Navbar from './Navbar';

function Header() {
    return(
        <section id ='section3'>
        <div id ='main'>
            <Navbar/>
            <div className='name'>
            <h1>EXPLOREZ LA BEAUTE NATURELLE EN ALGERIE</h1>
            <p className='details'> <span>L’Algérie,</span> un pays incontournable avec d’innombrables lieux touristiques.</p>
            <a href='section3' className='cv-btn'>Inscription</a>
            </div>
        </div>
        </section>
    )
}
export default Header;