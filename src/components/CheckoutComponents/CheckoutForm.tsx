import { ChangeEventHandler, FC, MouseEventHandler, useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import { Button, Form } from "react-bootstrap";
import 'react-phone-input-2/lib/style.css'
import './CheckoutForm.scss'
import { IDeliveryRegion, IError } from "../../utils/interfaces/UIInterfaces";
import SubmitErrorList from "./SubmitErrorList";
import Validators from "../../utils/validators/validators";
import { EMPTY_ADDRESS_ERROR, EMPTY_DELIVERY_REGION_ERROR, EMPTY_NAME_ERROR, INVALID_EMAIL_ERROR, INVALID_PHONE_ERROR } from "../../utils/consts/UIConsts";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { UserActionCreators } from "../../store/action-creators/userActionCreators";
import CheckoutBasketItemsList from "./CheckoutBasketItemsList";
import { ICurrentBasketItem } from "../../utils/interfaces/dbInterfaces";
import DeliveryRegionsList from "../DeliveryInfoComponents/DeliveryRegionsList";
import { CLIENT_URL } from "../../utils/consts/urlConsts";
import { PERSONAL_DATA_AGREEMENT_ROUTE } from "../../utils/consts/routeConsts";
import AddressInput from "./AddressInput";

const CheckoutForm: FC = () => {
    const dispatch = useAppDispatch()
    const userId = useAppSelector(state => state.user?.user?.id) || 0
    const discounts = useAppSelector(state => state.user?.totalDiscounts) || []
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [numberOfPeople, setNumberOfPeople] = useState(1)
    const [currentAddress, setCurrentAddress] = useState('')
    const [deliveryRegion, setDeliveryRegion] = useState<IDeliveryRegion | null>(null)
    const [paymentMethod, setPaymentMethod] = useState('courier')
    const [comment, setComment] = useState('')
    const [errors, setErrors] = useState<IError[]>([])
    const [agreedPersonalData, setAgreedPersonalData] = useState(false)

    useEffect(() => {
        const isValidEmail = Validators.isValidEmail(email)
        if (isValidEmail) return setErrors(prev => prev.filter(elem => elem.type !== INVALID_EMAIL_ERROR.type))
        if (errors.find(err => err.type === INVALID_EMAIL_ERROR.type)) return
        setErrors(prev => [...prev, INVALID_EMAIL_ERROR])
    }, [email])

    useEffect(() => {
        const isValidPhone = Validators.isValidPhone(phone)
        if (isValidPhone) return setErrors(prev => prev.filter(elem => elem.type !== INVALID_PHONE_ERROR.type))
        if (errors.find(err => err.type === INVALID_PHONE_ERROR.type)) return
        setErrors(prev => [...prev, INVALID_PHONE_ERROR])
    }, [phone])

    useEffect(() => {
        const isAddressEmpty = currentAddress.length === 0
        if (!isAddressEmpty) return setErrors(prev => prev.filter(elem => elem.type !== EMPTY_ADDRESS_ERROR.type))
        if (errors.find(err => err.type === EMPTY_ADDRESS_ERROR.type)) return
        setErrors(prev => [...prev, EMPTY_ADDRESS_ERROR])
    }, [currentAddress])

    useEffect(() => {
        const isRegionEmpty = !deliveryRegion
        if (!isRegionEmpty) return setErrors(prev => prev.filter(elem => elem.type !== EMPTY_DELIVERY_REGION_ERROR.type))
        if (errors.find(err => err.type === EMPTY_DELIVERY_REGION_ERROR.type)) return
        setErrors(prev => [...prev, EMPTY_DELIVERY_REGION_ERROR])
    }, [deliveryRegion])

    useEffect(() => {
        const isNameEmpty = name.length === 0
        if (!isNameEmpty) return setErrors(prev => prev.filter(elem => elem.type !== EMPTY_NAME_ERROR.type))
        if (errors.find(err => err.type === EMPTY_NAME_ERROR.type)) return
        setErrors(prev => [...prev, EMPTY_NAME_ERROR])
    }, [name])

    const handlePhoneChange = (value: string, data: {}, event: React.ChangeEvent<HTMLInputElement>, formattedValue: string) => {
        setPhone('+' + value)
    } 

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => setName(e.target.value)

    const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => setEmail(e.target.value)

    const handleNumberOfPeopleChange: ChangeEventHandler<HTMLInputElement> = (e) => setNumberOfPeople(parseInt(e.target.value) || NaN)

    const handlePaymentMethodChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setPaymentMethod(e.target.value)
    } 

    const handleCommentChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setComment(e.target.value)
    }

    const handleAgreedPersonalDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setAgreedPersonalData(prev => !prev)
    }

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        const currentBasketItems = JSON.parse(localStorage.getItem('currentBasketItems') || '[]') as ICurrentBasketItem[]
        dispatch(UserActionCreators.initializePayment(userId, phone, email, name, numberOfPeople, currentAddress, deliveryRegion, paymentMethod, discounts, currentBasketItems, comment))
        localStorage.setItem('currentBasketItems', '[]')
    }

    return (
        <div className="checkout-form-container">
            <Form>
                <Form.Label>
                    <h4>ТЕЛЕФОН</h4>
                    <PhoneInput
                        isValid={!errors.find(elem => elem === INVALID_PHONE_ERROR)}
                        country={'ru'} 
                        dropdownClass='phone-dropdown' 
                        placeholder='+7 (xxx) xxx-xx-xx' 
                        onlyCountries={['ru']}
                        onChange={handlePhoneChange} />
                </Form.Label>
                <br/>
                <Form.Label>
                    <h4>ИМЯ</h4>
                    <Form.Control 
                        type='text' 
                        onChange={handleNameChange} 
                        className={errors.find(elem => elem === EMPTY_NAME_ERROR) ? 'invalid-number' : ''} />
                </Form.Label>
                <Form.Label>
                    <h4>EMAIL</h4>
                    <Form.Control 
                        type='email' 
                        onChange={handleEmailChange}
                        className={errors.find(elem => elem === INVALID_EMAIL_ERROR) ? 'invalid-number' : ''} />
                </Form.Label>
                <br/>
                <Form.Label>
                    <h4>КОЛИЧЕСТВО ПЕРСОН</h4>
                    <Form.Control 
                        type='number' 
                        onChange={handleNumberOfPeopleChange}
                        value={numberOfPeople}
                        onBlur={(e) => {setNumberOfPeople(numberOfPeople ? numberOfPeople : 1)}} />
                </Form.Label>
                <br/>
                <Form.Label className="delivery-regions-label">
                    <h4>РАЙОН ДОСТАВКИ</h4>
                    <DeliveryRegionsList 
                        variant={errors.find(elem => elem === EMPTY_DELIVERY_REGION_ERROR) && 'invalid'} 
                        setDeliveryRegion={setDeliveryRegion} />
                </Form.Label>
                <br/>
                <AddressInput setCurrentAddress={setCurrentAddress} errors={errors} />
                <br/>
                <Form.Label>
                    <h4>СПОСОБ ОПЛАТЫ</h4>
                    <Form.Check 
                        inline 
                        name='payment-method-check' 
                        label='Картой или наличными курьеру' 
                        type='radio'
                        value='courier'
                        onChange={handlePaymentMethodChange}
                        checked={paymentMethod === 'courier'} />
                    {/* <Form.Check 
                        inline 
                        name='payment-method-check' 
                        label='Картой или электронным кошельком онлайн' 
                        value='online'
                        type='radio'
                        onChange={handlePaymentMethodChange}
                        checked={paymentMethod === 'online'} /> */}
                </Form.Label>
                <br/>
                <Form.Label>
                    <h4>КОММЕНТАРИЙ К ЗАКАЗУ</h4>
                    <Form.Control type='textarea' onChange={handleCommentChange} placeholder="Примечания к заказу" />
                </Form.Label>
                <h3>ВАШ ЗАКАЗ</h3>
                <CheckoutBasketItemsList deliveryPrice={parseInt(deliveryRegion?.price || '0') || 0} />
                {errors.length > 0 && <SubmitErrorList errors={errors} />}
                <Form.Label className="personal-data-label">
                    <Form.Check 
                        name='personal-data-agreement-check'
                        type='checkbox'
                        id='personal-data-checkbox'
                        onChange={handleAgreedPersonalDataChange}
                        checked={agreedPersonalData} />
                        <span>
                            Я <a href={PERSONAL_DATA_AGREEMENT_ROUTE}>даю согласие</a> на обработку своих персональных данных
                        </span>
                </Form.Label>
                <Button className='submit-button' disabled={errors.length > 0 || !agreedPersonalData} onClick={handleSubmit}>ОФОРМИТЬ ЗАКАЗ</Button>
            </Form>
        </div>
    )
}

export default CheckoutForm