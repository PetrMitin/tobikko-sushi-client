import {FC, useEffect, useState} from "react";
import ContentWithMenu from "../../components/ReusableComponents/ContentWithMenu";
import Footer from "../../components/ReusableComponents/Footer";
import MenuItemsList from "../../components/MenuComponents/MenuItemsList";
import CustomNavbar from "../../components/ReusableComponents/Navbar";
import PopupLogo from "../../components/LandingComponents/PopupLogo";
import SmallNavbar from "../../components/ReusableComponents/SmallNavbar";

const Menu: FC = () => {
    const [isPopupShown, setIsPopupShown] = useState<boolean>(true)
    const [dWidth, setDWidth] = useState(window.innerWidth)

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

    
    return (
        isPopupShown 
            ? <PopupLogo />:
        <div id="menu-container">
            <CustomNavbar whatIsActive="menu" />
            {dWidth <= 470 && <SmallNavbar />}
            <ContentWithMenu Component={MenuItemsList} />
            <Footer />
        </div>
    )
}

export default Menu