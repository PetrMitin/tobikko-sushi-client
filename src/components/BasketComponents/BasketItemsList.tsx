import {FC, useEffect, useRef, useState} from 'react'
import { Button } from 'react-bootstrap'
import { useAppDispatch, useAppSelector} from '../../store/hooks'
import { DATE20_DISCOUNT } from '../../utils/consts/apiConsts'
import { ICurrentBasketItem, IMenuItem } from '../../utils/interfaces/dbInterfaces'
import BasketItem from './BasketItem'
import './BasketItemsList.scss'

const BasketItemsList: FC = () => {
    const dispatch = useAppDispatch()
    const currentBasketItems = useAppSelector(state => state.user?.currentBasketItems) || []
    const menuItems = useAppSelector(state => state.user?.menuItems || [])   
    const [totalPrice, setTotalPrice] = useState(0) 
    const isDate20DiscountActive = (useAppSelector(state => state.user?.totalDiscounts) || []).includes(DATE20_DISCOUNT)

    const countTotalPrice = (currentBasketItems: ICurrentBasketItem[]) => {
        let cTotalPrice = 0
        currentBasketItems.forEach(basketItem => {
            const currentMenuItem = menuItems.find(menuItem => menuItem.id === basketItem.menuItemId) || {} as IMenuItem
            if (!currentMenuItem.price) {
                currentMenuItem.price = 0
            }
            const mult = isDate20DiscountActive ? 0.8 : 1
            cTotalPrice += ((basketItem.isHalfPortion && currentMenuItem.halfportionprice) 
                            ? Math.ceil(currentMenuItem.halfportionprice * mult) * basketItem.amount
                            : Math.ceil(currentMenuItem.price * mult) * basketItem.amount)
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
                .filter(basketItem => basketItem.amount > 0 && menuItems.find(menuItem => menuItem.id === basketItem.menuItemId))
                .map(basketItem => {
                    console.log(basketItem);
                    const currentMenuItem = menuItems.find(menuItem => menuItem.id === basketItem.menuItemId)
                    if (!currentMenuItem) return
                    return <BasketItem key={currentMenuItem.id} setTotalPrice={setTotalPrice} menuItem={currentMenuItem} amount={basketItem.amount} />
                })}
            {totalPrice > 0 ? <h2>ИТОГО: {totalPrice}&#8381;</h2> : ''}
            {totalPrice > 0 ? <Button variant='secondary' className='checkout-button' href='/checkout' >ОФОРМИТЬ ЗАКАЗ</Button> : ''}
        </div>
    )
}

export default BasketItemsList