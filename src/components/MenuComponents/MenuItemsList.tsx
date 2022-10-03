import {FC, useEffect, useState} from 'react'
import { UserActionCreators } from '../../store/action-creators/userActionCreators'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { IMenuItem, IMenuItemType } from '../../utils/interfaces/dbInterfaces'
import MenuItem from './MenuItem'
import './MenuItemsList.scss'

const MenuItemsList: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserActionCreators.getMenuItems())
    }, [dispatch])

    const menuItems = useAppSelector(state => state.user?.menuItems) || []
    const [menuItemsFilter, setMenuItemsFilter] = useState('')
    const [filteredMenuItems, setFilteredMenuItems] = useState<IMenuItem[]>(menuItems)
    const menuItemTypes = useAppSelector(state => state.user?.menuItemTypes) || []
    const menuItemTypesFilter = useAppSelector(state => state.user?.menuItemTypesFilter)
    const selectedMenuType = menuItemTypes.find((type) => type.id === menuItemTypesFilter) || {} as IMenuItemType

    const handleMenuItemFilterChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setMenuItemsFilter(e.target.value)
    }

    useEffect(() => {
        setFilteredMenuItems(menuItems)
    }, [menuItems])

    const isMenuItemMatchingFilter = (menuItem: IMenuItem, itemFilter: string): boolean => {
        const filter = itemFilter.toLowerCase()
        let flag = menuItem.name.toLowerCase().includes(filter)
        const infos = menuItem.menu_item_infos
        flag = flag || infos.map(info => info.info.toLowerCase().includes(filter)).some(elem => elem)
        return flag
    }

    useEffect(() => {
        setFilteredMenuItems(
            () => menuItems.filter(menuItem => isMenuItemMatchingFilter(menuItem, menuItemsFilter))
        )
    }, [menuItemsFilter])

    return (
        <div className='menu-items-list-container'>
            {menuItemTypesFilter && <h2>{selectedMenuType.name.toUpperCase()}</h2>}
            <h3>Искать позиции</h3>
            <input type='text' onChange={handleMenuItemFilterChange} placeholder='Искать по позициям...' />
            <div className="menu-items-list">
                {!menuItemTypesFilter
                ? filteredMenuItems.map(menuItem => <MenuItem menuItem={menuItem} key={menuItem.id} />) 
                : filteredMenuItems.filter(menuItem => menuItem.menu_item_types.map(itemType => itemType.id).includes(menuItemTypesFilter))
                .map(menuItem => <MenuItem menuItem={menuItem} key={menuItem.id} />)}
            </div>
        </div>
    )
}

export default MenuItemsList