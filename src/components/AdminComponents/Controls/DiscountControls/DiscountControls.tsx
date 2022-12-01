import {ChangeEventHandler, FC, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useTotalDiscountMuliplier } from '../../../../hooks/hooks'
import { AdminActionCreators } from '../../../../store/action-creators/adminActionCreators'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import ActivePromotionControls from './ActivePromotionControls'

const DiscountControls: FC = () => {
    const dispatch = useAppDispatch()
    const [multiplier, setMultiplier] = useState(useTotalDiscountMuliplier())

    const handleMultiplierChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setMultiplier((100-parseInt(e.target.value)) / 100)
    }

    const handleOnDiscountClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(AdminActionCreators.setActiveDiscount({multiplier, name: 'active'}))
    }

    const handleOffDiscountClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(AdminActionCreators.setActiveDiscount({multiplier: 1, name: 'active'}))
    }

    return (
        <>
        <div className="discount-controls-container">
            <h3>Скидки</h3>
            <h4>Введите размер скидки в процентах</h4>
            <Form.Control type='number' onChange={handleMultiplierChange} style={{marginBottom: '2%'}} value={(100 - multiplier*100)} />
            <Button variant='primary' onClick={handleOnDiscountClick} style={{marginBottom: '2%'}}>Включить скидку</Button>
            <br/>
            <Button variant='primary' onClick={handleOffDiscountClick}>Выключить скидку</Button>
        </div>
        <ActivePromotionControls />
        </>
    )
}

export default DiscountControls