import {FC, MouseEventHandler, useEffect, useRef, useState} from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import './MenuItem.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import MenuItemInfo from './MenuItemInfo'
import { IMenuItem, ICurrentBasketItem } from '../../utils/interfaces/dbInterfaces'
import { API_URL } from '../../utils/consts/urlConsts'
import { UserActionCreators } from '../../store/action-creators/userActionCreators'
import { BASKET_ROUTE } from '../../utils/consts/routeConsts'
import ItemAddedMessage from '../ReusableComponents/ItemAddedMessage'
import { DATE20_DISCOUNT } from '../../utils/consts/apiConsts'

const MenuItem: FC<{menuItem: IMenuItem}> = ({menuItem}) => {
    const dispatch = useAppDispatch()
    const firstRender = useRef(true)
    const prevStringCurrentBasketItems = localStorage.getItem('currentBasketItems')
    const prevCurrentBasketItems: ICurrentBasketItem[] = JSON.parse(prevStringCurrentBasketItems ? prevStringCurrentBasketItems : '[]')
    const currentBasketItems = prevCurrentBasketItems
    const basketId = useAppSelector(state => state.user?.basket?.id)
    const baseApiUrl = API_URL
    const currentBasketItem = currentBasketItems.find(item => item.menuItemId === menuItem.id)
    const [amountCounter, setAmountCounter] = useState(currentBasketItem?.amount || 0)
    const [isHalfPortion, setIsHalfPortion] = useState(currentBasketItem?.isHalfPortion || false)
    const [isPopupShown, setIsPopupShown] = useState(false)
    const isSoup = menuItem.menu_item_types.filter(({name}) => name.toLowerCase().includes('суп')).length > 0
    const noDiscountPrice = isHalfPortion ? menuItem.halfportionprice : menuItem.price
    const isDate20DiscountActive = (useAppSelector(state => state.user?.totalDiscounts) || []).includes(DATE20_DISCOUNT)
    const totalPrice = isDate20DiscountActive ? Math.ceil(((noDiscountPrice || 0) * 0.8)) : noDiscountPrice

    const handleIncrement: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAmountCounter(prevState => {
            if (prevState === 0) {
                return 2
            }
            return prevState + 1
        })
    }

    const handleDecrement: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAmountCounter(prevState => {
            prevState <= 1 && setIsPopupShown(false)
            return prevState <= 0 ? prevState : prevState - 1
        })
    }

    const handleHalfPortionClick: MouseEventHandler<HTMLDivElement> = (e) => {
        setIsHalfPortion(true)
    }

    const handleFullPortionClick: MouseEventHandler<HTMLDivElement> = (e) => {
        setIsHalfPortion(false)
    }

    const handleToBasketClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAmountCounter(prevState => prevState > 0 ? prevState : 1)
        setIsPopupShown(true)
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
            isHalfPortion: isHalfPortion,
            basketId: basketId ? basketId : 0
        }
        const prevCurrentBasketItem = currentBasketItems.find(item => item.menuItemId === menuItem.id)
        if (!prevCurrentBasketItem) {
            currentBasketItems.push(newCurrentBasketItem)
        } else {
            currentBasketItems[currentBasketItems.indexOf(prevCurrentBasketItem)] = newCurrentBasketItem
        }
        dispatch(UserActionCreators.setCurrentBasketItems(currentBasketItems))
        return () => {
            localStorage.setItem('currentBasketItems', JSON.stringify(currentBasketItems))
        }
    }, [amountCounter, isHalfPortion, dispatch])

    return (
        <Card className='menu-item bg-dark'>
            {isDate20DiscountActive && <div className='discount-label'>-20%</div>}
            <Card.Img variant="top" src={`${baseApiUrl}/${menuItem.image}`} />
            <hr/>
            <Card.Body>
                <Card.Title>{menuItem.name.toUpperCase()}</Card.Title>
                <Card.Text className='info-container'>
                    Масса: {isHalfPortion ? menuItem.halfportionmass : menuItem.massInGramms} г. <br/>
                    {menuItem.menu_item_infos.map(menuItemInfo => <MenuItemInfo menuItemInfo={menuItemInfo} key={menuItemInfo.id} />)}
                </Card.Text>
                {menuItem.halfportionprice &&
                <div className='portion-size-controls'>
                    <div 
                        className={`portion-size-option`} 
                        onClick={handleHalfPortionClick}>
                            {isHalfPortion && 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>}
                            {isSoup ? menuItem.halfportionmass.toString() + ' г.' : '4 шт.'}
                    </div>
                    <div 
                        className={`portion-size-option`} 
                        onClick={handleFullPortionClick}>
                            {!isHalfPortion && 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>}
                            {isSoup ? menuItem.massInGramms.toString() + ' г.' : '8 шт.'}
                    </div>
                </div>
                }
                {noDiscountPrice !== totalPrice 
                && <span className='no-discount-price'>{noDiscountPrice}&#8381;</span>}
                <div className="basket-item-controls">
                    <div className="item-price">
                        <span className='total-price'>{totalPrice}&#8381;</span>
                    </div>
                    <ButtonGroup aria-label="counter-buttons">
                        <Button variant="secondary" onClick={handleDecrement}>-</Button>
                        <Button variant="primary" disabled={true} >{amountCounter > 0 ? amountCounter : 1}</Button>
                        <Button variant="secondary" onClick={handleIncrement}>+</Button>
                        <Button onClick={handleToBasketClick} variant="secondary" className='to-basket-button'>ЗАКАЗАТЬ</Button>
                    </ButtonGroup><br />
                </div>
                {isPopupShown && <ItemAddedMessage />}
            </Card.Body>
        </Card>
    )
}

export default MenuItem