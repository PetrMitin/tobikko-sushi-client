import {FC, useEffect, useLayoutEffect, useState} from "react";
import ContentWithMenu from "../../components/ReusableComponents/ContentWithMenu";
import Footer from "../../components/ReusableComponents/Footer";
import MenuItemsList from "../../components/MenuComponents/MenuItemsList";
import CustomNavbar from "../../components/ReusableComponents/Navbar";
import PopupLogo from "../../components/LandingComponents/PopupLogo";
import SmallNavbar from "../../components/ReusableComponents/SmallNavbar";
import { useAppSelector } from "../../store/hooks";
import { DATE20_DISCOUNT } from "../../utils/consts/apiConsts";
import DiscountBanner from "../../components/ReusableComponents/DiscountBanner";
import { IStorageFlag } from "../../utils/interfaces/UIInterfaces";

const Menu: FC = () => {
    const [isPopupShown, setIsPopupShown] = useState<boolean>(true)
    const isPageDisabled = useAppSelector(state => state.admin?.isPageDisabled) 
    const totalDiscounts = useAppSelector(state => state.user?.totalDiscounts) || []
    const [dWidth, setDWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('load', () => {
            localStorage.setItem('isFirstRender', '1')
            sessionStorage.setItem('isFirstRender', '1')
        })

        window.addEventListener('beforeunload', () => {
            localStorage.setItem('isFirstRender', '0')
            sessionStorage.setItem('isFirstRender', '0')
        })
    }, [])

    useEffect(() => {
        const isFirstLocalRender: IStorageFlag = localStorage.getItem('isFirstRender') as IStorageFlag
        const isFirstSessionRender: IStorageFlag = sessionStorage.getItem('isFirstRender') as IStorageFlag
        if (isFirstLocalRender === '1' && isFirstSessionRender === '1') { // actually not first render
            setIsPopupShown(false)
        } else if (isFirstLocalRender === '0' && isFirstSessionRender === '0') { // actually not first render
            setIsPopupShown(false)
        } else if (isFirstLocalRender === null && isFirstSessionRender === null) { // both flags undefined => first render
            setTimeout(() => {
                setIsPopupShown(false)
            }, 3000)
        } else { // flags unequal, user closed page and reopened it => first render
            setTimeout(() => {
                setIsPopupShown(false)
            }, 3000)
        }
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
                {dWidth <= 470 && <SmallNavbar variant="menu" />}
                <ContentWithMenu Component={MenuItemsList} />
                <Footer />
            </div>)
    )
}

export default Menu