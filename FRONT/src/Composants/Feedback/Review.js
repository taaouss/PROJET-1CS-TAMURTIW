import './Review.css'

import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import Choixdate from './Choixdate'
import Dropzone from './Dropzone'


const Stars = () => {
  const [rating, setRating] = useState(10) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    console.log(rate)
    setRating(rate)
    // other logic
  }

  return (
    <Rating
      onClick={handleRating}
      ratingValue={rating} /* Available Props */
    />
  )
}
const Review = () => {

    const [data, setData]= useState ({
        titre:'',
        commentaire:'',
        rate:'',
        date:''
    })

    const handleChange= (e) => {
        const{ name, value } = e.target;
        setData({...data, [name]: value});
      
    };

    const HandleSubmit =(e) => {
        e.preventDefault()
        console.log(data)
    }

   
     
      
  return (
     <div className='cmnt'>
     <h2>N'hésitez pas à partager votre expérience !  </h2>
    <div className="App">
  
     <form onSubmit={HandleSubmit}> 
      <h2> Comment évaluez-vous votre expérience ? </h2>
      <Stars  />
      <Choixdate />
     
      <div >
        <h2> Titre de votre expérience:   </h2>
        <input 
        name='titre'
        type='texte'
        onChange={(e)=> handleChange(e)}
        className='titre'
        />
        </div>
       <div>
        <h2> Votre commentaire: </h2>
        <input
        type='texte'
         name='commentaire'
         onChange={(e)=> handleChange(e)}
         className='put'
        />
      </div>
      <div > 
        <h2> Ajouter quelques photos:</h2>
      <Dropzone/> </div>
      
      <button className='btn ' onClick={HandleSubmit}> Envoyer </button>
      </form>
      
    </div>
    </div>
    
  )
}

export default Review
