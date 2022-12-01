import React, {FC, MouseEventHandler, useEffect, useState} from 'react'
import { Navbar, Nav, Image, DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap'
import { useAppSelector } from '../../store/hooks'
import { MAIN_LOGO_NO_TEXT_URL, TURTLES_LOGO_URL } from '../../utils/consts/urlConsts'
import { ICurrentBasketItem } from '../../utils/interfaces/dbInterfaces'
import './Navbar.scss'

const CustomNavbar: FC<{whatIsActive?: 'menu' | 'about-restaurant' | 'delivery-info' | 'basket'}> = ({whatIsActive}) => {
    const [dWidth, setDWidth] = useState(window.innerWidth)
    const variant = dWidth > 1276 ? 'full' : 'shrinked'
    const isPhoneDisplayed = dWidth > 772
    const currentBasketItemsSelector = useAppSelector(state => state.user?.currentBasketItems) || []
    const [basketItemsAmount, setBasketItemsAmount] = useState(0)
    const [currentBasketItems, setCurrentBasketItems] = useState(JSON.parse(localStorage.getItem('currentBasketItems') || '[]') as ICurrentBasketItem[])
    const [isExpanded, setIsExpanded] = useState(false)

    const updateDWidth = () => setDWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', updateDWidth)
        return () => {
            window.removeEventListener('resize', updateDWidth)
        }
    }, [])

    useEffect(() => {
        setBasketItemsAmount(() => {
            let totalAmount = 0
            currentBasketItemsSelector.forEach(val => {
                totalAmount += val.amount
            })
            return totalAmount
        })
    }, [currentBasketItemsSelector])

    const handleExpansionChange: MouseEventHandler<HTMLDivElement> = (e) => {
        setIsExpanded(prevState => !prevState)
    }
    
    if (variant === 'shrinked') {
        return (
            <Navbar bg="dark" variant="dark" id="navbar" className={isPhoneDisplayed ? 'navbar-row' : 'navbar-col'}>
                <div className="navbar-main-content">
                {isPhoneDisplayed ?
                <div className="navbar-header">
                    <DropdownButton as={ButtonGroup} className='bg-dark' title={<p>.<br/> .<br/> .<br/></p>} id="bg-nested-dropdown">
                        <Dropdown.Item href='/menu'>Меню</Dropdown.Item>
                        <Dropdown.Item href='/delivery-info'>О доставке</Dropdown.Item>
                    </DropdownButton>
                    <Navbar.Brand href="http://turtles-pizza.com/" target={'_blank'}>
                        <Image 
                        src={TURTLES_LOGO_URL}
                        alt="logo" 
                        className='main-logo-img turtles-logo'/>
                    </Navbar.Brand>
                    <Navbar.Brand href="/about-us">
                        <Image 
                        src={MAIN_LOGO_NO_TEXT_URL}
                        alt="logo" 
                        className='main-logo-img'/>
                    </Navbar.Brand>
                </div> :
                (<React.Fragment>
                <DropdownButton as={ButtonGroup} className='bg-dark' title={<p>.<br/> .<br/> .<br/></p>} id="bg-nested-dropdown">
                <Dropdown.Item href='/menu'>Меню</Dropdown.Item>
                <Dropdown.Item href='/delivery-info'>О доставке</Dropdown.Item>
            </DropdownButton>
            <Navbar.Brand href="http://turtles-pizza.com/" target={'_blank'}>
                <Image 
                src={TURTLES_LOGO_URL}
                alt="logo" 
                className='main-logo-img turtles-logo'/>
            </Navbar.Brand>
            <Navbar.Brand href="/about-us">
                <Image 
                src={MAIN_LOGO_NO_TEXT_URL}
                alt="logo" 
                className='main-logo-img'/>
            </Navbar.Brand>
            </React.Fragment>)}
                {isPhoneDisplayed && <div className="phone-text"><Navbar.Text>
                    <a href='tel:+79169350505'>+7 (916) 935-05-05</a><br/>
                    Часы работы: 11:00-22:45<br/>
                    Жуковский, ул. Гудкова, д. 20
                </Navbar.Text></div>}
                    
                    <Nav.Link href="/basket" className={`${whatIsActive === 'basket' ? 'active' : ''} basket-link`}>
                        <div className="basket-link-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>
                            КОРЗИНА <br/>({basketItemsAmount.toString()})
                        </div>
                    </Nav.Link>
                    </div>
                    {!isPhoneDisplayed && <div className="phone-text phone-text-downside"><Navbar.Text>
                    <a href='tel:+79169350505'>+7 (916) 935-05-05</a><br/>
                    Часы работы: 11:00-22:45<br/>
                    Жуковский, ул. Гудкова, д. 20
                </Navbar.Text></div>}
            </Navbar>
        )
    } else {
        return (
            <Navbar bg="dark" variant="dark" id="navbar">
                <Navbar.Brand href="http://turtles-pizza.com/" target='_blank'>
                    <Image 
                    src={TURTLES_LOGO_URL}
                    alt="logo" 
                    className='main-logo-img turtles-logo'/>
                </Navbar.Brand>
                <Navbar.Brand href="/about-us">
                    <Image 
                    src={MAIN_LOGO_NO_TEXT_URL}
                    alt="logo" 
                    className='main-logo-img'/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/menu" className={whatIsActive === 'menu' ? 'active' : ''}>МЕНЮ</Nav.Link>
                    <Nav.Link href="/delivery-info" className={whatIsActive === 'delivery-info' ? 'active' : ''}>О ДОСТАВКЕ</Nav.Link>
                </Nav>
                <Navbar.Text>
                <a href='tel:+79169350505'>+7 (916) 935-05-05</a><br/>
                    Часы работы: 11:00-22:45<br/>
                    Жуковский, ул. Гудкова, д. 20
                </Navbar.Text>
                <Nav.Link href="/basket" className={`${whatIsActive === 'basket' ? 'active' : ''} basket-link`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    КОРЗИНА ({basketItemsAmount.toString()})
                </Nav.Link>
            </Navbar>
        )
    }
}

export default CustomNavbar