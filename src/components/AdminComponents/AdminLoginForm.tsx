import {ChangeEvent, ChangeEventHandler, FC, MouseEventHandler, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { AdminActionCreators } from '../../store/action-creators/adminActionCreators'
import { useAppDispatch } from '../../store/hooks'

const AdminLoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleIsLoginChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setIsLogin(!!e.currentTarget.value)
    }

    const handleIsLoginClick: MouseEventHandler<HTMLInputElement> = (e) => {
        setIsLogin(!!e.currentTarget.value)
    }

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        dispatch(isLogin 
                ? AdminActionCreators.loginAdmin(email, password)
                : AdminActionCreators.registrateAdmin(email, password))
    }

    return (
        <div className="admin-login-form-container">
            <h1>Авторизация</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={handleEmailChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type={'password'} onChange={handlePasswordChange} />
                </Form.Group>
                <Form.Check 
                    type='radio' 
                    checked
                    inline 
                    name='isLogin' 
                    label='Вход' 
                    value={'1'} 
                    onChange={handleIsLoginChange}
                    onClick={handleIsLoginClick} />
                <Form.Check 
                    type='radio' 
                    inline 
                    name='isLogin' 
                    label='Регистрация' 
                    value={''} 
                    onChange={handleIsLoginChange}
                    onClick={handleIsLoginClick} />
                <br/>
                <Button type='submit' onClick={handleSubmit}>АВТОРИЗОВАТЬСЯ</Button>
            </Form>
        </div> 
    )
}

export default AdminLoginForm