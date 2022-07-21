import React, {FC, Fragment, useEffect, useState} from "react";
import ContentWithMenu from "../components/ReusableComponents/ContentWithMenu";
import Countdown from "../components/LandingComponents/Countdown";
import Footer from "../components/ReusableComponents/Footer";
import LandingInfoPannel from "../components/LandingComponents/LandingInfoPannel";
import CustomNavbar from "../components/ReusableComponents/Navbar";
import Showcase from "../components/ReusableComponents/Showcase";
import { useAppSelector } from "../store/hooks";
import { IImage, IPopupState } from "../utils/interfaces/UIInterfaces";
import PopupLogo from "../components/LandingComponents/PopupLogo";

const Landing: FC = () => {
    const isPageDisabled = useAppSelector(state => state.admin?.isPageDisabled)   
    const [isPopupShown, setIsPopupShown] = useState<boolean>(true)

    const imgs: IImage[] = [
        {
            src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18195c8a71a%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18195c8a71a%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.36000137329103%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E', 
            alt: 'Первый слайд'
        }
    ]

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