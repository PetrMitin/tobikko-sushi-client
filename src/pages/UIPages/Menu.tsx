import {FC, useEffect, useState} from "react";
import ContentWithMenu from "../../components/ReusableComponents/ContentWithMenu";
import Footer from "../../components/ReusableComponents/Footer";
import MenuItemsList from "../../components/MenuComponents/MenuItemsList";
import CustomNavbar from "../../components/ReusableComponents/Navbar";
import PopupLogo from "../../components/LandingComponents/PopupLogo";
import SmallNavbar from "../../components/ReusableComponents/SmallNavbar";
import { useAppSelector } from "../../store/hooks";
import { DATE20_DISCOUNT } from "../../utils/consts/apiConsts";
import DiscountBanner from "../../components/ReusableComponents/DiscountBanner";

const Menu: FC = () => {
    const [isPopupShown, setIsPopupShown] = useState<boolean>(true)
    const isPageDisabled = useAppSelector(state => state.admin?.isPageDisabled) 
    const totalDiscounts = useAppSelector(state => state.user?.totalDiscounts) || []
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
        ? <PopupLogo /> :
        (isPageDisabled 
            ? <PopupLogo /> 
            : <div id="menu-container">
                <CustomNavbar whatIsActive="menu" />
                {totalDiscounts.includes(DATE20_DISCOUNT) && <DiscountBanner />}
                {dWidth <= 470 && <SmallNavbar />}
                <ContentWithMenu Component={MenuItemsList} />
                <Footer />
            </div>)
    )
}

export default Menu