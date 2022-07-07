import {FC, useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import { UserActionCreators } from '../store/action-creators'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { ICurrentBasketItem, IMenuItem } from '../utils/interfaces'
import BasketItem from './BasketItem'
import './BasketItemsList.scss'

const BasketItemsList: FC = () => {
    const dispatch = useAppDispatch()
    const [totalPrice, setTotalPrice] = useState(0)
    const [currentBasketItems, setCurrentBasketItems] = useState(JSON.parse(localStorage.getItem('currentBasketItems') || '[]') as ICurrentBasketItem[])

    useEffect(() => {
        dispatch(UserActionCreators.getMenuItems())
    }, [dispatch])
 
    const menuItems = useAppSelector(state => state.user?.menuItems || [])
    
    useEffect(() => {
        currentBasketItems.forEach(basketItem => {
            const currentMenuItem = menuItems.find(menuItem => menuItem.id === basketItem.menuItemId) || {} as IMenuItem
            if (!currentMenuItem.price) {
                currentMenuItem.price = 0
            }
            setTotalPrice(prev => prev + currentMenuItem.price * basketItem.amount)
        })
    }, [])

    if (!menuItems?.length) return <div className="basket-items-list"></div>
    
    return (
        <div className="basket-items-list">
            <h1 className='page-title'>КОРЗИНА</h1>
            {totalPrice === 0 
            ? <h2 className='empty-basket-heading'>Ваша корзина пуста!</h2>
            : currentBasketItems
                .filter(basketItem => basketItem.amount > 0)
                .map(basketItem => {
                    const currentMenuItem = menuItems.find(menuItem => menuItem.id === basketItem.menuItemId) || {} as IMenuItem
                    return <BasketItem key={currentMenuItem.id} menuItem={currentMenuItem} amount={basketItem.amount} />
                })}
            {totalPrice > 0 ? <h2>ИТОГО: {totalPrice}&#8381;</h2> : ''}
            {totalPrice > 0 ? <Button variant='secondary' className='checkout-button' href='/checkout' >ОФОРМИТЬ ЗАКАЗ</Button> : ''}
        </div>
    )
}

export default BasketItemsList