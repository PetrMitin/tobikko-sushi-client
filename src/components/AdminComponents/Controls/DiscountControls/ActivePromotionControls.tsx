import {ChangeEventHandler, FC, MouseEventHandler, useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { AdminActionCreators } from '../../../../store/action-creators/adminActionCreators'
import { UserActionCreators } from '../../../../store/action-creators/userActionCreators'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import HelperFunctions from '../../../../utils/functions/helperFunctions'
import validators from '../../../../utils/validators/validators'

const ActivePromotionControls: FC = () => {
    const dispatch = useAppDispatch()
    const activePromotion = useAppSelector(state => state.user?.activePromotion) || undefined
    const [primaryText, setPrimaryText] = useState(activePromotion ? activePromotion.primaryText : '')
    const [secondaryText, setSecondaryText] = useState(activePromotion ? activePromotion.secondaryText : '')
    const [startDate, setStartDate] = useState<Date | undefined>(activePromotion?.startDate)
    const [endDate, setEndDate] = useState<Date | undefined>(activePromotion?.endDate)

    const handlePrimaryTextChange: ChangeEventHandler<HTMLInputElement> = (e) => setPrimaryText(e.target.value)

    const handleSecondaryTextChange: ChangeEventHandler<HTMLInputElement> = (e) => setSecondaryText(e.target.value)

    const handleStartDateChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setStartDate(new Date(Date.parse(e.target.value)))
    }

    const handleEndDateChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setEndDate(new Date(Date.parse(e.target.value)))
    }

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        if (!validators.isValidDate(startDate) || !validators.isValidDate(endDate)) return window.alert('Некорректные даты!')
        if (!primaryText) return window.alert('Основной текст должен быть введен!')
        dispatch(AdminActionCreators.setActivePromotion({
            primaryText,
            secondaryText,
            startDate,
            endDate
        }))
    }

    useEffect(() => {
        dispatch(UserActionCreators.getActivePromotion())
    }, [dispatch])

    useEffect(() => {
        setPrimaryText(activePromotion ? activePromotion.primaryText : '')
        setSecondaryText(activePromotion ? activePromotion.secondaryText : '')
        setStartDate(activePromotion?.startDate)
        setEndDate(activePromotion?.endDate)
    }, [activePromotion])

    return (
        <div className="active-promotion-controls-container">
            <h3>Активная акция</h3>
            <Form>
                <h5>Основной текст акции (красный)</h5>
                <Form.Control onChange={handlePrimaryTextChange} value={primaryText} />
                <h5>Дополнительный текст акции (мелкий белый)</h5>
                <Form.Control onChange={handleSecondaryTextChange} value={secondaryText} />
                <h5>Старт акции (дата, включительно)</h5>
                <Form.Control type='date' onChange={handleStartDateChange} value={startDate && HelperFunctions.toYYYYDDMM(startDate)} />
                <h5>Конец акции (дата, не включительно)</h5>
                <Form.Control type='date' onChange={handleEndDateChange} value={endDate && HelperFunctions.toYYYYDDMM(endDate)} />
                <br/>
                <Button onClick={handleSubmit}>Изменить</Button>
            </Form>
        </div>
    )
}

export default ActivePromotionControls