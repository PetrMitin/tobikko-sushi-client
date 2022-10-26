import { FC } from "react";
import { SIGNATURE_URL } from "../../utils/consts/urlConsts";
import './DiscountBanner.scss'

const DiscountBanner: FC = () => {
    return (
        <div className="discount-banner-container">
            <h2>Действует скидка 20% на всё меню!</h2>
        </div>
    )
}

export default DiscountBanner