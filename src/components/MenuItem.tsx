import {FC, MouseEventHandler, useEffect, useRef, useState} from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import { ICurrentBasketItem, IMenuItem } from '../utils/interfaces'
import MenuItemInfo from './MenuItemInfo'
import './MenuItem.scss'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { UserActionCreators } from '../store/action-creators'

const MenuItem: FC<{menuItem: IMenuItem}> = ({menuItem}) => {
    const dispatch = useAppDispatch()
    const firstRender = useRef(true)
    console.log(menuItem);
    const prevStringCurrentBasketItems = localStorage.getItem('currentBasketItems')
    const prevCurrentBasketItems: ICurrentBasketItem[] = JSON.parse(prevStringCurrentBasketItems ? prevStringCurrentBasketItems : '[]')
    const currentBasketItems = prevCurrentBasketItems
    const basketId = useAppSelector(state => state.user?.basket?.id)
    const baseApiUrl = 'http://localhost:4000'
    const [amountCounter, setAmountCounter] = useState(currentBasketItems.find(item => item.menuItemId === menuItem.id && item.basketId === basketId)?.amount || 0)

    const handleIncrement: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAmountCounter(prevState => prevState + 1)
    }

    const handleDecrement: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAmountCounter(prevState => prevState <= 0 ? prevState : prevState - 1)
    }

    useEffect(() => {
        if (currentBasketItems === undefined) return
        if (firstRender.current) {
            firstRender.current = false
            const prevStringCurrentBasketItems = localStorage.getItem('currentBasketItems')
            const prevCurrentBasketItems: ICurrentBasketItem[] = JSON.parse(prevStringCurrentBasketItems ? prevStringCurrentBasketItems : '[]')
            dispatch(UserActionCreators.setCurrentBasketItems(prevCurrentBasketItems))
            return 
        }
        const newCurrentBasketItem: ICurrentBasketItem = {
            amount: amountCounter,
            menuItemId: menuItem.id,
            basketId: basketId ? basketId : 0
        }
        const prevCurrentBasketItem = currentBasketItems.find(item => item.menuItemId === menuItem.id && item.basketId === basketId)
        if (!prevCurrentBasketItem) {
            currentBasketItems.push(newCurrentBasketItem)
        } else {
            currentBasketItems[currentBasketItems.indexOf(prevCurrentBasketItem)] = newCurrentBasketItem
        }
        localStorage.setItem('currentBasketItems', JSON.stringify(currentBasketItems))
        dispatch(UserActionCreators.setCurrentBasketItems(currentBasketItems))
        return () => {
            localStorage.setItem('currentBasketItems', JSON.stringify(currentBasketItems))
        }
    }, [amountCounter, dispatch])

    return (
        <Card className='menu-item bg-dark'>
            <Card.Img variant="top" src={`${baseApiUrl}/${menuItem.image}`} />
            <hr/>
            <Card.Body>
                <Card.Title>{menuItem.name.toUpperCase()}</Card.Title>
                <Card.Text className='info-container'>
                    Масса: {menuItem.massInGramms} г. <br/>
                    {menuItem.menu_item_infos.map(menuItemInfo => <MenuItemInfo menuItemInfo={menuItemInfo} key={menuItemInfo.id} />)}
                </Card.Text>
                <div className="basket-item-controls">
                    <div className="item-price">
                        {menuItem.price}&#8381;
                    </div>
                    <ButtonGroup aria-label="counter-buttons">
                        <Button variant="secondary" onClick={handleDecrement}>-</Button>
                        <Button variant="primary" disabled={true} >{amountCounter}</Button>
                        <Button variant="secondary" onClick={handleIncrement}>+</Button>
                        <Button href='/basket' variant="secondary" className='to-basket-button'>ЗАКАЗАТЬ</Button>
                    </ButtonGroup><br />
                </div>
            </Card.Body>
        </Card>
    )
}

export default MenuItem