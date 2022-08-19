import {FC, MouseEventHandler, useEffect, useRef, useState} from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import MenuItemInfo from '../MenuComponents/MenuItemInfo'
import './BasketItem.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { IMenuItem, ICurrentBasketItem } from '../../utils/interfaces/dbInterfaces'
import { API_URL } from '../../utils/consts/urlConsts'
import { UserActionCreators } from '../../store/action-creators/userActionCreators'

const BasketItem: FC<{menuItem: IMenuItem, amount: number}> = ({menuItem, amount}) => {
    // console.log(menuItem);
    const dispatch = useAppDispatch()
    const firstRender = useRef(true)
    const prevStringCurrentBasketItems = localStorage.getItem('currentBasketItems')
    const prevCurrentBasketItems: ICurrentBasketItem[] = JSON.parse(prevStringCurrentBasketItems ? prevStringCurrentBasketItems : '[]')
    const currentBasketItems = prevCurrentBasketItems
    const basketId = useAppSelector(state => state.user?.basket?.id)
    const baseApiUrl = API_URL
    const [amountCounter, setAmountCounter] = useState(amount || currentBasketItems.find(item => item.menuItemId === menuItem.id && item.basketId === basketId)?.amount || 0)

    const handleIncrement: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAmountCounter(prevState => prevState + 1)
    }

    const handleDecrement: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAmountCounter(prevState => prevState <= 0 ? prevState : prevState - 1)
    }

    const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
        setAmountCounter(0)
    }

    useEffect(() => {
        if (amountCounter === 0) window.location.reload()
    }, [amountCounter])

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
        <Card className='basket-item bg-dark'>
            <div className="img-container">
                <Card.Img variant="top" src={`${baseApiUrl}/${menuItem.image}`} />
            </div>
            <Card.Body>
                <div className="card-info">
                    <Card.Title>{menuItem.name.toUpperCase()}</Card.Title>
                </div>
                <div className="basket-item-controls">
                    <div className="item-price">
                        {menuItem.price * amount}&#8381;
                    </div>
                    <ButtonGroup aria-label="counter-buttons">
                        <Button variant="secondary" onClick={handleDecrement}>-</Button>
                        <Button variant="primary" disabled={true} >{amountCounter}</Button>
                        <Button variant="secondary" onClick={handleIncrement}>+</Button>
                        <Button variant="danger" className='delete-item-button' onClick={handleDelete}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                      </svg></Button> 
                    </ButtonGroup><br />
                </div>
            </Card.Body>
        </Card>
    )
}

export default BasketItem