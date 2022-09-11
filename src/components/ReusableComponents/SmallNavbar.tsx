import { FC } from "react";
import { ABOUT_US_ROUTE, DELIVERY_INFO_ROUTE, MENU_ROUTE } from "../../utils/consts/routeConsts";
import './SmallNavbar.scss'

const SmallNavbar: FC = () => {
    return (
        <div className="small-navbar-container">
            <a href={MENU_ROUTE}><h2>МЕНЮ</h2></a>
            <a href={ABOUT_US_ROUTE}><h2>О НАС</h2></a>
            <a href={DELIVERY_INFO_ROUTE}><h2>ДОСТАВКА</h2></a>
        </div>
    )
}

export default SmallNavbar