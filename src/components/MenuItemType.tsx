import {FC, MouseEventHandler} from 'react'
import { ListGroup } from 'react-bootstrap'
import { UserActionCreators } from '../store/action-creators'
import { useAppDispatch } from '../store/hooks'
import { IMenuItemType } from '../utils/interfaces'

const MenuItemType: FC<{menuItemType: IMenuItemType}> = ({menuItemType}) => {
    const dispatch = useAppDispatch()

    const handleClick: MouseEventHandler = (e) => {
        dispatch(UserActionCreators.setMenuItemTypesFilter(menuItemType.id))
    }

    return (
        <ListGroup.Item onClick={handleClick}>
            <img src='https://e.mail.ru/cgi-bin/getattach?file=sushi-icon.jpg&id=16561696670129536813%3B0%3B1&mode=attachment&x-email=petr09mitin%40mail.ru'
                alt={menuItemType.name} />
                {menuItemType.name.toUpperCase()}
        </ListGroup.Item>
    )
}

export default MenuItemType