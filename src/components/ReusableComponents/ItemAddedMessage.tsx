import { FC } from "react";
import { BASKET_ROUTE } from "../../utils/consts/routeConsts";
import './ItemAddedMessage.scss'

const ItemAddedMessage: FC = () => {
    return (
        <div className="item-added-message">
            <h5>Позиция добавлена в корзину. <a href={BASKET_ROUTE}>Перейти к корзине</a></h5>
        </div>
    )
}

export default ItemAddedMessage