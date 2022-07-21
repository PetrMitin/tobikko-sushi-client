import {FC} from 'react'
import DeliveryRegionsList from './DeliveryRegionsList'
import './DeliveryInfoContent.scss'

const DeliveryInfoContent: FC = () => {
    return (
        <div className="delivery-info-content">
            <h1>О доставке</h1>
            <div className="working-schedule">
                <h2>График работы</h2>
                Без выходных с 11:00 - до 23:45 <br/>
                Заказы навынос г. Жуковский, ул. Гудкова д.20

                <div className="free-shipping">
                    <h4>Бесплатная доставка по региону
                    Жуковский - от 500 р.
                    Ильинский ж/с  - от 500 р.
                    Кратово ж/с - от 1500 р.</h4>
                </div>

                <div className="changed-conditions">
                    Изменены условия доставки в связи с ремонтом моста через железную дорогу.
                </div>
            </div>

            <div className="cost-by-region">
                <h2>Стоимость доставки по региону</h2>

                Конечная сумма доставки зависти от района. Уточняйте у оператора.
                Ж/С - Жуковская сторона.
                Р/С - Раменская сторона.
                <DeliveryRegionsList />
            </div>

            <div className="also-free">
                <h2>Бесплатно прилагается к каждому заказу:</h2>
                <ul>
                    <li>соевый соус (80г.)</li>
                    <li>имбирь (30г.)</li>
                    <li>васаби (30г.)</li>
                </ul>
            </div>
            
        </div>
    )
}

export default DeliveryInfoContent
