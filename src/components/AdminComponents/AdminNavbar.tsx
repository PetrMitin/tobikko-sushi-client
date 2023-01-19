import { FC } from "react";
import { Button } from "react-bootstrap";
import { ADMIN_ABOUT_US_CONTROLS, ADMIN_DISCOUNT_CONTROLS, ADMIN_MENU_ITEMS_CONTROLS, ADMIN_ROUTE, ADMIN_TYPES_CONTROLS } from "../../utils/consts/routeConsts";
import { CLIENT_URL } from "../../utils/consts/urlConsts";
import './AdminNavbar.scss'

const AdminNavbar: FC = () => {
    return (
        <div className="admin-navbar">
            <Button href={`${CLIENT_URL}/admin${ADMIN_TYPES_CONTROLS}`}>Разделы меню</Button>
            <Button href={`${CLIENT_URL}/admin${ADMIN_MENU_ITEMS_CONTROLS}`}>Позиции меню</Button>
            <Button href={`${CLIENT_URL}/admin${ADMIN_DISCOUNT_CONTROLS}`}>Скидки и акции</Button>
            <Button href={`${CLIENT_URL}/admin${ADMIN_ABOUT_US_CONTROLS}`}>Редактировать О Нас</Button>
        </div>
    )
}

export default AdminNavbar