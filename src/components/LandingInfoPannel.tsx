import {FC} from 'react'
import AboutUs from './AboutUs'
import RecommendedBy from './RecommendedBy'

const LandingInfoPannel: FC = () => {
    return (
        <div className='landing-info-pannel' style={{width: '80%'}}>
            <AboutUs />
            <RecommendedBy />
        </div>
    )
}

export default LandingInfoPannel