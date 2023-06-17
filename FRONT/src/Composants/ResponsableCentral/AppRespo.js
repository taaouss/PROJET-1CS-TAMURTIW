import {React ,useState}from 'react'
import ListeLieux from '../GestionLieux/ListeLieux'
import ReactMapGL from 'react-map-gl'

function AppRespo() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height:'100vh',
    latitude: 37.7577,
    longitude: -122.4376,
  });
  
  return (
    <div>
      <div className='bar'/>
      <div className='containerA'>
          <div className='Map'>
        
          </div>
          <div className='InfoContainer'>
             <ListeLieux/>
          </div>
      </div>
  
  
      </div>
    
  )
}

export default AppRespo