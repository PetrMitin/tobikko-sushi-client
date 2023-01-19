import {FC, Fragment, useEffect, useState} from "react";
import Countdown from "../../components/LandingComponents/Countdown";
import Footer from "../../components/ReusableComponents/Footer";
import LandingInfoPannel from "../../components/LandingComponents/LandingInfoPannel";
import CustomNavbar from "../../components/ReusableComponents/Navbar";
import Showcase from "../../components/ReusableComponents/Showcase";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import SmallNavbar from "../../components/ReusableComponents/SmallNavbar";
import { UserActionCreators } from "../../store/action-creators/userActionCreators";

const Landing: FC = () => {
    const isPageDisabled = useAppSelector(state => state.admin?.isPageDisabled)   
    const imgs = useAppSelector(state => state.user?.aboutUsImages) || []
    const [dWidth, setDWidth] = useState(window.innerWidth)
    const dispatch = useAppDispatch()
    const [isPopupShown, setIsPopupShown] = useState<boolean>(true)

    useEffect(() => {
        dispatch(UserActionCreators.getAboutUsParagraphs())
        dispatch(UserActionCreators.getAboutUsImages())
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsPopupShown(false)
        }, 3000)
    })

    const updateDWidth = () => setDWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', updateDWidth)
        return () => {
            window.removeEventListener('resize', updateDWidth)
        }
    }, [])

    return (<div id="landing-container">
            {isPageDisabled 
            ? <Countdown />
            : <Fragment>
                <CustomNavbar />
                <Showcase imgs={imgs} />
                {dWidth <= 470 && <SmallNavbar />}
                <LandingInfoPannel />
                <Footer />
            </Fragment>}
        </div>)
}

export default Landing