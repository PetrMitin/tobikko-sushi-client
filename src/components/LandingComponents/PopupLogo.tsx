import {FC} from 'react'
import {Image} from 'react-bootstrap'
import { MAIN_LOGO_TEXT_URL } from '../../utils/consts'
import { IPopupState } from '../../utils/interfaces/UIInterfaces'
import './PopupLogo.scss'

const PopupLogo: FC = () => {
    return (
        <div className={`popup-logo-container`}>
            <Image 
                    src={MAIN_LOGO_TEXT_URL}
                    alt="logo" 
                    className='popup-logo-img'/>
        </div>
    )
}

export default PopupLogo