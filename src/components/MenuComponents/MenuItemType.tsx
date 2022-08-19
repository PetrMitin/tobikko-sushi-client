import {FC, MouseEventHandler} from 'react'
import { ListGroup } from 'react-bootstrap'
import { UserActionCreators } from '../../store/action-creators/userActionCreators'
import { useAppDispatch } from '../../store/hooks'
import { API_URL } from '../../utils/consts/urlConsts'
import { IMenuItemType } from '../../utils/interfaces/dbInterfaces'
import './MenuItemType.scss'

const MenuItemType: FC<{menuItemType: IMenuItemType}> = ({menuItemType}) => {
    const dispatch = useAppDispatch()

    const handleClick: MouseEventHandler = (e) => {
        dispatch(UserActionCreators.setMenuItemTypesFilter(menuItemType.id))
    }

    return (
        <ListGroup.Item onClick={handleClick}>
            <div className="types-list-container">
                <img src={`${API_URL}/${menuItemType.icon}`}
                    alt={menuItemType.name} />
                    {menuItemType.name.toUpperCase()}
            </div>
        </ListGroup.Item>
    )
}

export default MenuItemType