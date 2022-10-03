import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { UserActionCreators } from "../../store/action-creators/userActionCreators";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { EMPTY_ADDRESS_ERROR } from "../../utils/consts/UIConsts";
import { IError } from "../../utils/interfaces/UIInterfaces";
import './AddressInput.scss'

const AddressInput: FC<{setCurrentAddress: React.Dispatch<React.SetStateAction<string>>, errors: IError[]}> = ({setCurrentAddress, errors}) => {
    const dispatch = useAppDispatch()
    const suggestions = useAppSelector(state => state.user?.addressSuggestions) || []
    const [isSuggestionHidden, setIsSuggestionHidden] = useState<boolean>(suggestions.length <= 0)
    const [address, setAddress] = useState('')
    
    const handleAddressChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setAddress(e.target.value)
        setIsSuggestionHidden(false)
    }

    const handleSuggestionClick = () => {
        setAddress(suggestions[0].unrestricted_value)
        setIsSuggestionHidden(true)
    }

    const handleInputFocusOut = () => {
        setAddress(suggestions.length > 0 ? suggestions[0].unrestricted_value : '')
        setIsSuggestionHidden(true)
    }

    useEffect(() => {
        address 
        ? dispatch(UserActionCreators.getAddressSuggestions(address))
        : dispatch(UserActionCreators.setAddressSuggestions([]))
        setCurrentAddress(address)
    }, [address])
    
    return (
        <Form.Label>
            <h4>АДРЕС ДОСТАВКИ</h4>
            <input
                type='text' 
                onChange={handleAddressChange}
                onBlur={handleInputFocusOut}
                value={address}
                className={errors.find(elem => elem === EMPTY_ADDRESS_ERROR) ? 'invalid-number' : ''} />
            <div className="address-suggestion" onClick={handleSuggestionClick} hidden={isSuggestionHidden}>
                {suggestions.length > 0 && suggestions[0].unrestricted_value}
            </div>
        </Form.Label>
    )
}

export default AddressInput