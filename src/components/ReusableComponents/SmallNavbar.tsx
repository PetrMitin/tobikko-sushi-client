import { FC } from "react";
import { DELIVERY_INFO_ROUTE, MENU_ROUTE } from "../../utils/consts/routeConsts";
import './SmallNavbar.scss'

const SmallNavbar: FC = () => {
    return (
        <div className="small-navbar-container">
            <a href={MENU_ROUTE}><h2>МЕНЮ</h2></a>
            <a href={DELIVERY_INFO_ROUTE}><h2>О ДОСТАВКЕ</h2></a>
        </div>
    )
}

export default SmallNavbar