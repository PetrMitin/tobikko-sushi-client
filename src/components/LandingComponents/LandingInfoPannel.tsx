import {FC} from 'react'
import { useAppSelector } from '../../store/hooks'
import AboutUs from '../AboutUsComponents/AboutUs'
import RecommendedBy from '../RecommendedByComponents/RecommendedBy'

const LandingInfoPannel: FC = () => {
    const isPageDisabled = useAppSelector(state => !!state.admin?.isPageDisabled)

    return (
        <div className='landing-info-pannel' style={{width: '80%'}}>
            <AboutUs />
        </div>
    )
}

export default LandingInfoPannel