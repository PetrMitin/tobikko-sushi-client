import { FC } from "react";
import { useTotalDiscountMuliplier, useTotalPercentDiscount } from "../../hooks/hooks";
import './DiscountBanner.scss'

const DiscountBanner: FC = () => {
    const multInPercentStr = useTotalPercentDiscount()

    return (
        <div className="discount-banner-container">
            <h2>Действует скидка {multInPercentStr} на всё меню!</h2>
        </div>
    )
}

export default DiscountBanner