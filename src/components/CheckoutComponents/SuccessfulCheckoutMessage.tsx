import { FC } from "react";

const SuccessfulCheckoutMessage: FC = () => {
     return (
         <div className="successful-checkout-message-container">
                <h1>Спасибо за заказ!</h1>
                <p>
                    Ваш заказ принят. В ближайшее время по указанному Вами номеру телефона с 
                    Вами свяжется администратор для подтверждения.
                </p>
         </div>
     )
}

export default SuccessfulCheckoutMessage