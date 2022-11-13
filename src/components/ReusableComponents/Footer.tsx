import {FC, useEffect, useState} from 'react'
import { Nav } from 'react-bootstrap'
import { Icon28LogoVkColor } from '@vkontakte/icons';
import { ABOUT_RESTAURANT_ROUTE, ADMIN_ROUTE, DELIVERY_INFO_ROUTE, MENU_ROUTE, PUBLIC_OFFER_ROUTE } from '../../utils/consts/routeConsts';
import './Footer.scss'


const Footer: FC = () => {
    const [dWidth, setDWidth] = useState(window.innerWidth)

    const updateDWidth = () => setDWidth(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener('resize', updateDWidth)
        return () => {
            window.removeEventListener('resize', updateDWidth)
        }
    }, [])

    if (dWidth >= 600) return (
        <div className="footer" id="footer">
            <hr />
            <div className="footer-container w-100">
                <div className="footer-col">
                    <Nav.Link href={MENU_ROUTE}>МЕНЮ</Nav.Link>
                    <Nav.Link href={DELIVERY_INFO_ROUTE}>О ДОСТАВКЕ</Nav.Link>
                </div>
                <div className="footer-col">
                    <Nav.Link href="#footer">СПОСОБЫ ОПЛАТЫ</Nav.Link>
                    <Nav.Link href="#footer">
                            <img src='https://cdn-icons-png.flaticon.com/512/825/825510.png' 
                            alt='Visa' className='payment-method-img' />
                            <img src='https://cdn-icons-png.flaticon.com/512/825/825464.png' 
                            alt='Master Card' className='payment-method-img' />
                            <img src='https://www.sberbank.ru/portalserver/static/templates/%5BBBHOST%5D/RuMasterpageTemplate/static/android-chrome-192x192.png' 
                            alt='SberPay' className='payment-method-img' />
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///+LP/2KPf2HNv2PRP25k/6JOv2ELv2CKP2GM/3ezf6DKv2GMv2BJf338v/BoP79+/+peP307v/59f/q3/+WVP2fZv3TvP7Fp/6ia/2lcf2cYP3ax/7i0/7QuP6ziv6STf3n2v/x6f+ZWv3Wwf60jP6/nf67lv7Msf6sff3s4//Krv6UT/25lP7Otf6ndP0HB1JQAAAGPklEQVR4nO2c6XbiMAyFqVOyYAJhXwoFWmiHtjN9/7ebQKENJLFEsJJyzv1+s/gmsizJsms1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7NCaj9qbzuQhZtjZtEfzbtUjssl8/NkMtRc4jvuFE3ie703a86jqoVmgN/r0dODeZeAGWk8eW1WP8DpmU+1lqvtW6fmTddWjLEw0vtNGeUeRzstNvshe3Q8UrW+HCsLN7Wls+w5P3hdO+HpbXmftNi/RtyMIRlWPmk9r4jPtM4nSD09Vj5zJyLvIQH9w/T9Vj53F1i+mb4eeVj16mu4yKC4w9jj3v91SV03GCmjC1Y2qNRiZhQVczCkqfKxahYFReK2+HaG8v3nb1Hm8SgiMJb5LK4z8ONFhEKiTr80sCYwl/pOWuOUtaOo++aWVNYGxxJmwwrV3ucJu82onk5T4Jqsw4i3aJwqXVy4TZz/tCAfiU9Zwkwo7Vy30aZwHWYX/WKlBQuHjFaFaNl5bVGGL5TV+FHYtepkj4UpU4jPHTH8UPlidhIdfX4oqfOeY6bfCkbYvUNpOnzjz6qgw4hZkLiQUrRovGYM+Kny17EePOJ+SCl8Yoz4o7IrY6A5RZ7NimOlB4aJg0YLGnQgqrN3RZvqlkLeyFEP0JW7oN/OlUGoW7hCdiXN6dn0p5EXpu487nvY9z/e97J2aLHxJd+qQZrpXOGIqdPzl6+ytF0XRU6P9zK34By+CCukkca9wyHofjr85yYe6bYcX+qqc0dlgRr6cnUJWRKrCRS/1+22f82z0XE4hnSTuFHLCO+cu0yV2B5zvbuQU1j6pZ7xTyDDS4CEvm90yvJkjqPCRMtNYYY8eY2BYtv/SX/f7cgp71BSLFTbIyWpO1hekoTYlS4tU1hcrfKUcrlLmgguZWbqSmzWUF4kVkgOk4q4WaaeBoEIqSYwVUkbmLKg/eafs3JfcjfowBx5q2aJWlJDuQKBCfE+yOtw2B9VqOSdeAP0K6bpeMBZU2De/IvXxSIzOZ5SuIwtPqTj3RgtSg7bZlZ5ubOTRMf+IbBr81/jnakCk906d8yeEIaiBpEJzkqgGHfNi4bFa1vrmBUPdSSqsuSYzVYOh2Q9qVsQVEbFTU1Sh0QzV87NZoc/rVlPEcxJVaIw71fPAPDYvnRVmQdRmQ9mNNtMcsaXQ7LGlFZpcuS0rJYp1slZqLDRZ8jRUlibraYyOztJqQdQthVcLY5nC0oo/JqLfD2GFf/IjDktRG5FjykZtMd386JsReTMmouEP9shG3jsGuY/YTvZE7eOJZk978qeJWlLPn7FeRFSZQDQD3vOWq4JTxdhSP1+ntq5Eqxhf5AZVrEoUUZXvkyVLyZLwgdyKoY1qIhGxCVcTD6zyVmQLFeEJucElWhE+kpfdXF/V79B7M5JV/W/yIperd2amtEDlliAw1xTZu2sq0930l4wmDtHdtR9yTPGCHdJtKlOM6qy+fskd0gQ5G96X7HKHi5P59PTqsVo4xBOLAzld0Rd2KtzX1/1eFPXeZi8D7tm9QLbL9JucJLFgt4n26DaPI6LdJkkmmaZYQsdQpySBObsnJXR9lbEY7snOIW68c++UzK7og0J6G7co5b3CnCRRvIO2tFlYy0kSv7ug+b7xImS7oM/JShJvupM9RVY1RfY0grssVWBmV3TiRIn1IzPlupk9GS0TiXLo6NZOBWWQ0RWdLPhubZ/sGpYtMGt3QfJ0nlvBNRnpCPv0hKXVgzNa+IRlJukkUfCUbCWH8tNd0WcbLw17J52rOZKf7oo+31pa2zqtLn6UO4fU0dnU5tn6+isVqhRYewy9U3Sq4N4ocjHN2WMLq7uJpzdrnJP6TN+59uYPr5ziWnFanCMG+fz+21tiFldMRr/MjLA4s2bRW5T0b764JUnvs9BNWP7whm6LnN2xq6hHmu6N3S445lXtjzha8hieDFFbc287UYFf5/X4/TKi93vN8Dmudtu3daNgksbWM29SuJ6eineTyBKtt45uZqlUbqCbn6ObNM9zVu8d5Sdu2XWcwNO+Mx3L3l5SMr3Vevx3O50Mh8Pptj4ezW/vwlIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwS/kP66Nf/QPW3csAAAAASUVORK5CYII=' 
                            alt='YooMoney' className='payment-method-img' />
                            <img src='https://cdn-icons-png.flaticon.com/512/594/594098.png' 
                            alt='Cash' className='payment-method-img' />
                        </Nav.Link>
                        <Nav.Link href={PUBLIC_OFFER_ROUTE}>ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ</Nav.Link>
                    <Nav.Link href={ADMIN_ROUTE}>АДМИНИСТРАТОРАМ</Nav.Link>
                </div>
                <div className="footer-col">
                    <Nav.Link href="#footer">МЫ В СОЦ. СЕТЯХ</Nav.Link>
                    <Nav.Link href="https://vk.com/clubturtlespizzatobikkosushi" target={'_new'}><Icon28LogoVkColor /></Nav.Link>
                    <Nav.Link href="#navbar">НАВЕРХ</Nav.Link>
                </div>
            </div>
        </div>
    )
    if (dWidth < 600 && dWidth > 0) return (
        <div className="footer" id="footer">
            <hr />
            <div className="footer-container w-100">
                <div className="footer-col">
                    <Nav.Link href={MENU_ROUTE}>МЕНЮ</Nav.Link>
                    <Nav.Link href={DELIVERY_INFO_ROUTE}>О ДОСТАВКЕ</Nav.Link>
                    <Nav.Link href="#footer">СПОСОБЫ ОПЛАТЫ</Nav.Link>
                    <Nav.Link href="#footer">
                            <img src='https://cdn-icons-png.flaticon.com/512/825/825510.png' 
                            alt='Visa' className='payment-method-img' />
                            <img src='https://cdn-icons-png.flaticon.com/512/825/825464.png' 
                            alt='Master Card' className='payment-method-img' />
                            <img src='https://www.sberbank.ru/portalserver/static/templates/%5BBBHOST%5D/RuMasterpageTemplate/static/android-chrome-192x192.png' 
                            alt='SberPay' className='payment-method-img' />
                            <img src='data:image/png;base64,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' 
                            alt='YooMoney' className='payment-method-img' />
                            <img src='https://cdn-icons-png.flaticon.com/512/594/594098.png' 
                            alt='Cash' className='payment-method-img' />
                        </Nav.Link>
                    <Nav.Link href="#footer">МЫ В СОЦ. СЕТЯХ</Nav.Link>
                    <Nav.Link href="https://vk.com/clubturtlespizzatobikkosushi" target={'_new'}><Icon28LogoVkColor /></Nav.Link>
                    <Nav.Link href={PUBLIC_OFFER_ROUTE}>ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ</Nav.Link>
                    <Nav.Link href="#navbar">НАВЕРХ</Nav.Link>
                    <Nav.Link href={ADMIN_ROUTE}>АДМИНИСТРАТОРАМ</Nav.Link>
                </div>
            </div>
        </div>
    )
    return <></>
}

export default Footer