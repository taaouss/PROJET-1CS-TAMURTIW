import react from 'react'
import FeatureBox from './FeatureBox';
import hauteurs from '../Image/hauteurs.jpg'
import sahara from '../Image/sahara.jpg'
import ville from '../Image/ville.jpg'
function Feature(props) {
    return (
        
        
        <div className='features'>
            <div className='a-container'>  
            <FeatureBox image={hauteurs} title='Des sommets majestueux, des vallées verdoyantes et des cascades pittoresques.'/>
            <FeatureBox image={sahara} title='Les vastes étendues de dunes dorées, des paysages à couper le souffle et une culture riche en traditions.'/>
            <FeatureBox image={ville} title='Des villes historiques qui témoignent de son passé riche et diversifié.'/>
            </div>
        </div>
        
        
    )
}
export default Feature;