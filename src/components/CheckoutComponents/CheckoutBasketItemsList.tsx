import { FC, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useTotalDiscountMuliplier } from "../../hooks/hooks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { DATE20_DISCOUNT } from "../../utils/consts/apiConsts";
import { ICurrentBasketItem, IMenuItem } from "../../utils/interfaces/dbInterfaces";
import BasketItem from "../BasketComponents/BasketItem";

const CheckoutBasketItemsList: FC<{deliveryPrice: number}> = ({deliveryPrice}) => {
    const dispatch = useAppDispatch()
    const [currentBasketItems, setCurrentBasketItems] = useState(JSON.parse(localStorage.getItem('currentBasketItems') || '[]') as ICurrentBasketItem[])
    const menuItems = useAppSelector(state => state.user?.menuItems || [])    
    // console.log(currentBasketItems);
    const [totalPrice, setTotalPrice] = useState(0) 
    const totalMultiplier = useTotalDiscountMuliplier()

    const countTotalPrice = (currentBasketItems: ICurrentBasketItem[]) => {
        let cTotalPrice = 0
        currentBasketItems.forEach(basketItem => {
            const currentMenuItem = menuItems.find(menuItem => menuItem.id === basketItem.menuItemId) || {} as IMenuItem
            if (!currentMenuItem.price) {
                currentMenuItem.price = 0
            }
            const mult = totalMultiplier
            cTotalPrice += ((basketItem.isHalfPortion && currentMenuItem.halfportionprice) 
                            ? Math.ceil(currentMenuItem.halfportionprice * mult) * basketItem.amount
                            : Math.ceil(currentMenuItem.price * mult) * basketItem.amount)
        })
        cTotalPrice += deliveryPrice
        return cTotalPrice
    }

    useEffect(() => {
        setTotalPrice(countTotalPrice(currentBasketItems))
    }, [currentBasketItems, menuItems, deliveryPrice])


    if (!menuItems?.length) return <div className="basket-items-list"></div>
    
    return (
        <div className="basket-items-list">
            {totalPrice === 0 
            ? <h2 className='empty-basket-heading'>Ваш заказ пуст!</h2>
            : currentBasketItems
                .filter((basketItem, index, self) => basketItem.amount > 0 && self.indexOf(basketItem) === index && !!menuItems.find(menuItem => menuItem.id === basketItem.menuItemId))
                .map(basketItem => {
                    const currentMenuItem = menuItems.find(menuItem => menuItem.id === basketItem.menuItemId) || {} as IMenuItem
                    return <BasketItem key={currentMenuItem.id} setTotalPrice={setTotalPrice} menuItem={currentMenuItem} amount={basketItem.amount} />
                })}
            {totalPrice > 0 ? <h2>ИТОГО: {totalPrice}&#8381;</h2> : ''}
        </div>
    )
}

export default CheckoutBasketItemsList