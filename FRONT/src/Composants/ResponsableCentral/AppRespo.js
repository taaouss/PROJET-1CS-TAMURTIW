import React from 'react'
import ListeLieux from '../GestionLieux/ListeLieux'

function AppRespo() {
  return (
    <div>
      <div className='bar'/>
      <div className='containerA'>
          <div className='Map'></div>
          <div className='InfoContainer'>
             <ListeLieux/>
          </div>
      </div>
  
  
      </div>
    
  )
}

export default AppRespo