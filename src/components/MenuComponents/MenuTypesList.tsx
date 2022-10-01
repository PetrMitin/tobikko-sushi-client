import {FC, MouseEventHandler, useEffect, useState} from 'react'
import { ListGroup } from 'react-bootstrap'
import { UserActionCreators } from '../../store/action-creators/userActionCreators'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import MenuItemType from './MenuItemType'
import './MenuTypesList.scss'

const MenuTypesList: FC<{variant: 'vertical' | 'horizontal'}> = ({variant}) => {
    const menuItemTypes = useAppSelector(state => state.user?.menuItemTypes)
    const dispatch = useAppDispatch()
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        dispatch(UserActionCreators.getMenuItemTypes())
    }, [dispatch])

    const handleExpansionChange: MouseEventHandler<HTMLDivElement> = (e) => {
        setIsExpanded(prevState => !prevState)
    }

    if (variant === 'vertical') {
        return (
            <div className='menu-types-list menu-types-list-vertical'>
                <h2 onClick={() => {dispatch(UserActionCreators.setMenuItemTypesFilter(null))}}>МЕНЮ</h2>
                <ListGroup variant="flush" className='menu-types-container'>
                    {menuItemTypes
                    ?.map(menuItemType => (
                        <MenuItemType key={menuItemType.id} menuItemType={menuItemType} />
                    ))}
                </ListGroup>
            </div>
        )
    } else {
        return (
            <div className='menu-types-list menu-types-list-horizontal'>
                <div className={`menu-types-list-header ${isExpanded && 'menu-types-list-header-expanded'}`} onClick={handleExpansionChange}>
                    <div className={`more-container`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </div>
                    <h2 onClick={() => {dispatch(UserActionCreators.setMenuItemTypesFilter(null))}}>МЕНЮ</h2>
                </div>
                {isExpanded && <ListGroup variant="flush" className='menu-types-container menu-types-container-wide'>
                    {menuItemTypes
                    ?.map(menuItemType => (
                        <MenuItemType setIsListExpanded={setIsExpanded} key={menuItemType.id} menuItemType={menuItemType} />
                    ))}
                </ListGroup>}
            </div>
        )
    }
}

export default MenuTypesList