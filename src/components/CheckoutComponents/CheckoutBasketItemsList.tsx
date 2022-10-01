import { FC, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ICurrentBasketItem, IMenuItem } from "../../utils/interfaces/dbInterfaces";
import BasketItem from "../BasketComponents/BasketItem";

const CheckoutBasketItemsList: FC<{deliveryPrice: number}> = ({deliveryPrice}) => {
    const dispatch = useAppDispatch()
    const [currentBasketItems, setCurrentBasketItems] = useState(JSON.parse(localStorage.getItem('currentBasketItems') || '[]') as ICurrentBasketItem[])
    const menuItems = useAppSelector(state => state.user?.menuItems || [])    
    // console.log(currentBasketItems);
    const [totalPrice, setTotalPrice] = useState(0) 

    const countTotalPrice = (currentBasketItems: ICurrentBasketItem[]) => {
        let cTotalPrice = 0
        currentBasketItems.forEach(basketItem => {
            const currentMenuItem = menuItems.find(menuItem => menuItem.id === basketItem.menuItemId) || {} as IMenuItem
            if (!currentMenuItem.price) {
                currentMenuItem.price = 0
            }
            cTotalPrice += (basketItem.isHalfPortion && currentMenuItem.halfportionprice) 
                            ? currentMenuItem.halfportionprice * basketItem.amount
                            : currentMenuItem.price * basketItem.amount
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
            ? <h2 className='empty-basket-heading'>Ваш заказ пуст!</h2>
            : currentBasketItems
                .filter((basketItem, index, self) => basketItem.amount > 0 && self.indexOf(basketItem) === index)
                .map(basketItem => {
                    const currentMenuItem = menuItems.find(menuItem => menuItem.id === basketItem.menuItemId) || {} as IMenuItem
                    return <BasketItem key={currentMenuItem.id} setTotalPrice={setTotalPrice} menuItem={currentMenuItem} amount={basketItem.amount} />
                })}
            {totalPrice > 0 ? <h2>ИТОГО: {totalPrice}&#8381;</h2> : ''}
        </div>
    )
}

export default CheckoutBasketItemsList