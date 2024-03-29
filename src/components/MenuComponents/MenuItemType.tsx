import {FC, MouseEventHandler} from 'react'
import { ListGroup } from 'react-bootstrap'
import { UserActionCreators } from '../../store/action-creators/userActionCreators'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { API_URL } from '../../utils/consts/urlConsts'
import { IMenuItemType } from '../../utils/interfaces/dbInterfaces'
import './MenuItemType.scss'

const MenuItemType: FC<{menuItemType: IMenuItemType, setIsListExpanded?: React.Dispatch<React.SetStateAction<boolean>>}> = ({menuItemType, setIsListExpanded}) => {
    const dispatch = useAppDispatch()
    const menuItemTypesFilter = useAppSelector(state => state.user?.menuItemTypesFilter)

    const handleClick: MouseEventHandler = (e) => {
        dispatch(UserActionCreators.setMenuItemTypesFilter(menuItemType.id))
        setIsListExpanded && setIsListExpanded(false)
    }

    return (
        <ListGroup.Item onClick={handleClick}>
            <div className="types-list-container">
                <img src={`${API_URL}/${menuItemType.icon}`}
                    alt={menuItemType.name} />
                <span>{menuItemType.name.toUpperCase()}</span>
                {menuItemTypesFilter === menuItemType.id && 
                <svg className='selected-type-arrow' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>}
            </div>
        </ListGroup.Item>
    )
}

export default MenuItemType