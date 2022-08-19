import {FC, useEffect} from 'react'
import { UserActionCreators } from '../../store/action-creators/userActionCreators'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import MenuItem from './MenuItem'
import './MenuItemsList.scss'

const MenuItemsList: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserActionCreators.getMenuItems())
    }, [dispatch])

    const menuItems = useAppSelector(state => state.user?.menuItems)
    const menuItemTypesFilter = useAppSelector(state => state.user?.menuItemTypesFilter)

    return (
        <div className="menu-items-list">
            {!menuItemTypesFilter
            ? menuItems?.map(menuItem => <MenuItem menuItem={menuItem} key={menuItem.id} />) 
            : menuItems?.filter(menuItem => menuItem.menu_item_types.map(itemType => itemType.id).includes(menuItemTypesFilter))
            .map(menuItem => <MenuItem menuItem={menuItem} key={menuItem.id} />)}
        </div>
    )
}

export default MenuItemsList