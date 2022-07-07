import {FC} from 'react'
import { Nav } from 'react-bootstrap'
import { Icon28LogoVkColor } from '@vkontakte/icons';
import './Footer.scss'

const Footer: FC = () => {
    return (
        <div className="footer" id="footer">
            <hr />
            <div className="footer-container w-100">
                <div className="footer-col">
                    <Nav.Link href="/menu">МЕНЮ</Nav.Link>
                    <Nav.Link href="/about-restaurant">О РЕСТОРАНЕ</Nav.Link>
                    <Nav.Link href="/delivery-info">О ДОСТАВКЕ</Nav.Link>
                </div>
                <div className="footer-col">
                    <Nav.Link href="#footer">СПОСОБЫ ОПЛАТЫ</Nav.Link>
                    <Nav.Link href="#footer"></Nav.Link>
                    <Nav.Link href="/admin">АДМИНИСТРАТОРАМ</Nav.Link>
                </div>
                <div className="footer-col">
                    <Nav.Link href="#footer">МЫ В СОЦ. СЕТЯХ</Nav.Link>
                    <Nav.Link href="#footer"><Icon28LogoVkColor /></Nav.Link>
                    <Nav.Link href="#navbar">НАВЕРХ</Nav.Link>
                </div>
            </div>
        </div>
    )
}

export default Footer