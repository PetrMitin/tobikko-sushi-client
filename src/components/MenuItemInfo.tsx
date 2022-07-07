import {FC} from 'react'
import { IMenuItemInfo } from '../utils/interfaces'

const MenuItemInfo: FC<{menuItemInfo: IMenuItemInfo}> = ({menuItemInfo}) => {
    return (
        <span className="menu-item-info">
            {menuItemInfo.title}: {menuItemInfo.info}. {" "}
        </span>
    )
}

export default MenuItemInfo