import react from 'react'

function FeatureBox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <p>{props.title}</p>
            </div>
            
        </div>
    )
}
export default FeatureBox;