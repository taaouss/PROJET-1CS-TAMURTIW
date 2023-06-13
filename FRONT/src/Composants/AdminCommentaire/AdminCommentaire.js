import React from 'react'
import Commentaire from './Commentaire'
import "./AdminCommentaire.css"
import image1 from '../Images/man.png'
import image2 from '../Images/woman.png'
import image3 from '../Images/miner.png' 

function AdminCommentaire() {
  const Data =[
    {
      nom : "Mahmoud",
     commentaire:"Dès mon arrivée, j'ai été chaleureusement accueilli par le personnel, qui était souriant et aimable.L'atmosphère de votre lieu touristique était conviviale et détendue, ce qui m'a immédiatement mis à l'aise. ",
     image:image1,
     note:3
    },{
      nom : "Mahdi",
      commentaire:"J'ai été émerveillé par la beauté naturelle qui m'entourait, des paysages à couper le souffle qui resteront gravés dans ma mémoire.J'ai eu l'occasion de découvrir des sites historiques fascinants, enrichissant ainsi ma connaissance de la région.",
      image:image3,
      note:3.7
    },{
      nom:"Serine",
      commentaire:"Les installations étaient modernes, bien entretenues et d'une grande propreté, offrant un confort optimal aux visiteurs.L'accès aux attractions et aux services était bien organisé, facilitant ainsi la découverte et la navigation dans votre lieu touristique.",
      image:image2,
      note:4.2
    },
    {
      nom : "Mahmoud",
      commentaire:"Dès mon arrivée, j'ai été chaleureusement accueilli par le personnel, qui était souriant et aimable.L'atmosphère de votre lieu touristique était conviviale et détendue, ce qui m'a immédiatement mis à l'aise. ",
      image:image1,
      note:5
    },{
      nom : "Mahdi",
      commentaire:"J'ai été émerveillé par la beauté naturelle qui m'entourait, des paysages à couper le souffle qui resteront gravés dans ma mémoire.J'ai eu l'occasion de découvrir des sites historiques fascinants, enrichissant ainsi ma connaissance de la région.",
      image:image3,
      note:3.5
    },{
      nom:"Serine",
      commentaire:"Les installations étaient modernes, bien entretenues et d'une grande propreté, offrant un confort optimal aux visiteurs.L'accès aux attractions et aux services était bien organisé, facilitant ainsi la découverte et la navigation dans votre lieu touristique.",
      image:image2,
      note:3.75
    }
  ]
  return (
    <div className='Commentaires' style={{ maxHeight: '525px', overflow: 'auto' }}>
      {
        Data.map((item)=>(<div key={item.id}> <Commentaire nom={item.nom} commentaire={item.commentaire} image={item.image} note={item.note}></Commentaire> </div>))
       }
</div>)}
export default AdminCommentaire