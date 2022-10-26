import {FC, Fragment, useEffect, useState} from "react";
import ContentWithMenu from "../../components/ReusableComponents/ContentWithMenu";
import Countdown from "../../components/LandingComponents/Countdown";
import Footer from "../../components/ReusableComponents/Footer";
import LandingInfoPannel from "../../components/LandingComponents/LandingInfoPannel";
import CustomNavbar from "../../components/ReusableComponents/Navbar";
import Showcase from "../../components/ReusableComponents/Showcase";
import { useAppSelector } from "../../store/hooks";
import { imgs } from "../../utils/consts/UIConsts";
import SmallNavbar from "../../components/ReusableComponents/SmallNavbar";

const Landing: FC = () => {
    const isPageDisabled = useAppSelector(state => state.admin?.isPageDisabled)   
    const [dWidth, setDWidth] = useState(window.innerWidth)
    const [isPopupShown, setIsPopupShown] = useState<boolean>(true)

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