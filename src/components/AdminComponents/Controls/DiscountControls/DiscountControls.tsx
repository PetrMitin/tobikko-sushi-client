import {FC} from 'react'
import { Button } from 'react-bootstrap'
import { AdminActionCreators } from '../../../../store/action-creators/adminActionCreators'
import { useAppDispatch } from '../../../../store/hooks'
import ActivePromotionControls from './ActivePromotionControls'

const DiscountControls: FC = () => {
    const dispatch = useAppDispatch()

    const handleOnDiscountClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(AdminActionCreators.setIs20DiscountActive(true))
    }

    const handleOffDiscountClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(AdminActionCreators.setIs20DiscountActive(false))
    }

    return (
        <>
        <div className="discount-controls-container">
            <h3>Скидки</h3>
            <Button variant='primary' onClick={handleOnDiscountClick} style={{marginBottom: '2%'}}>Включить скидку 20%</Button>
            <br/>
            <Button variant='primary' onClick={handleOffDiscountClick}>Выключить скидку 20%</Button>
        </div>
        <ActivePromotionControls />
        </>
    )
}

export default DiscountControls