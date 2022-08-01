import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useAppSelector } from "../../../../store/hooks";
import { IMenuItem } from "../../../../utils/interfaces/dbInterfaces";
import NewMenuItemForm from "./NewMenuItemForm";
import UpdateMenuItemForm from "./UpdateMenuItemForm";

const MenuItemsControls: FC = () => {
    const menuItems = useAppSelector(state => state.user?.menuItems) || []
    const [filteredMenuItems, setFilteredMenuItems] = useState<IMenuItem[]>(menuItems)
    const [menuItemsFilter, setMenuItemsFilter] = useState('')

    const handleMenuItemsFilterChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setMenuItemsFilter(e.target.value)
    }

    useEffect(() => {
        setFilteredMenuItems(menuItems.filter(item => item.name.toLowerCase().includes(menuItemsFilter.toLowerCase())))
    }, [menuItemsFilter, menuItems])

    return (
        <div className="menu-items-controls">
            <NewMenuItemForm />
            <h2>Редактировать существующие позиции</h2>
            <Form.Control 
                type='text' 
                placeholder="Искать позиции меню..." 
                value={menuItemsFilter} 
                onChange={handleMenuItemsFilterChange}
                style={{
                    marginBottom: '2%'
                }} />
            {filteredMenuItems.length > 0 
            ? filteredMenuItems.map(item => <UpdateMenuItemForm item={item} key={item.id} />) 
            : <h3>Ничего нет!</h3>}
        </div>
    )
}

export default MenuItemsControls