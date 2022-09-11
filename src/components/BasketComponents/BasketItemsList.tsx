import {FC, useEffect, useRef, useState} from 'react'
import { Button } from 'react-bootstrap'
import { useAppDispatch, useAppSelector} from '../../store/hooks'
import { ICurrentBasketItem, IMenuItem } from '../../utils/interfaces/dbInterfaces'
import BasketItem from './BasketItem'
import './BasketItemsList.scss'

const BasketItemsList: FC = () => {
    const dispatch = useAppDispatch()
    const currentBasketItems = useAppSelector(state => state.user?.currentBasketItems) || []
    const menuItems = useAppSelector(state => state.user?.menuItems || [])   
    const [totalPrice, setTotalPrice] = useState(0) 

    const countTotalPrice = (currentBasketItems: ICurrentBasketItem[]) => {
        let cTotalPrice = 0
        currentBasketItems.forEach(basketItem => {
            const currentMenuItem = menuItems.find(menuItem => menuItem.id === basketItem.menuItemId) || {} as IMenuItem
            if (!currentMenuItem.price) {
                currentMenuItem.price = 0
            }
            cTotalPrice += currentMenuItem.price * basketItem.amount
        })
        return cTotalPrice
    }

    useEffect(() => {
        setTotalPrice(countTotalPrice(currentBasketItems))
    }, [currentBasketItems, menuItems])

    if (!menuItems?.length) return <div className="basket-items-list"></div>
    
    return (
        <div className="basket-items-list">
            {totalPrice === 0 
            ? <h2 className='empty-basket-heading'>Ваша корзина пуста!</h2>
            : currentBasketItems
                .filter(basketItem => basketItem.amount > 0)
                .map(basketItem => {
                    const currentMenuItem = menuItems.find(menuItem => menuItem.id === basketItem.menuItemId) || {} as IMenuItem
                    return <BasketItem key={currentMenuItem.id} setTotalPrice={setTotalPrice} menuItem={currentMenuItem} amount={basketItem.amount} />
                })}
            {totalPrice > 0 ? <h2>ИТОГО: {totalPrice}&#8381;</h2> : ''}
            {totalPrice > 0 ? <Button variant='secondary' className='checkout-button' href='/checkout' >ОФОРМИТЬ ЗАКАЗ</Button> : ''}
        </div>
    )
}

export default BasketItemsList