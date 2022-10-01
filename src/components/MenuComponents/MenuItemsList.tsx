import {FC, useEffect} from 'react'
import { UserActionCreators } from '../../store/action-creators/userActionCreators'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { IMenuItemType } from '../../utils/interfaces/dbInterfaces'
import MenuItem from './MenuItem'
import './MenuItemsList.scss'

const MenuItemsList: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserActionCreators.getMenuItems())
    }, [dispatch])

    const menuItems = useAppSelector(state => state.user?.menuItems)
    const menuItemTypes = useAppSelector(state => state.user?.menuItemTypes) || []
    const menuItemTypesFilter = useAppSelector(state => state.user?.menuItemTypesFilter)
    const selectedMenuType = menuItemTypes.find((type) => type.id === menuItemTypesFilter) || {} as IMenuItemType

    return (
        <div className='menu-items-list-container'>
            {menuItemTypesFilter && <h2>{selectedMenuType.name.toUpperCase()}</h2>}
            <div className="menu-items-list">
                {!menuItemTypesFilter
                ? menuItems?.map(menuItem => <MenuItem menuItem={menuItem} key={menuItem.id} />) 
                : menuItems?.filter(menuItem => menuItem.menu_item_types.map(itemType => itemType.id).includes(menuItemTypesFilter))
                .map(menuItem => <MenuItem menuItem={menuItem} key={menuItem.id} />)}
            </div>
        </div>
    )
}

export default MenuItemsList