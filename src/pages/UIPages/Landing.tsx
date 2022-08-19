import {FC, Fragment, useEffect, useState} from "react";
import ContentWithMenu from "../../components/ReusableComponents/ContentWithMenu";
import Countdown from "../../components/LandingComponents/Countdown";
import Footer from "../../components/ReusableComponents/Footer";
import LandingInfoPannel from "../../components/LandingComponents/LandingInfoPannel";
import CustomNavbar from "../../components/ReusableComponents/Navbar";
import Showcase from "../../components/ReusableComponents/Showcase";
import { useAppSelector } from "../../store/hooks";
import PopupLogo from "../../components/LandingComponents/PopupLogo";
import { imgs } from "../../utils/consts/UIConsts";

const Landing: FC = () => {
    const isPageDisabled = useAppSelector(state => state.admin?.isPageDisabled)   
    const [isPopupShown, setIsPopupShown] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsPopupShown(false)
        }, 3000)
    })

    return isPopupShown 
            ? <PopupLogo />
            : (<div id="landing-container">
            {isPageDisabled 
            ? <Countdown />
            : <Fragment>
                <CustomNavbar />
                <Showcase imgs={imgs} />
                <ContentWithMenu Component={LandingInfoPannel} />
                <Footer />
            </Fragment>}
            </div>)
}

export default Landing