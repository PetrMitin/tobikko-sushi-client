import {ChangeEventHandler, FC, useState} from 'react'
import { deliveryRegions } from '../../utils/consts'

const DeliveryRegionsList: FC = () => {
    const [currentRegion, setCurrentRegion] = useState('')

    const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
        setCurrentRegion(e.currentTarget.value)
    }

    return (
        <div className="delivery-regions-list-container">
            <h2>Выберите район доставки</h2>
            <select onChange={handleSelectChange}>
                {deliveryRegions.map(region => <option key={region.name} value={region.name + ' - ' + region.price}>{region.name}</option>)}
            </select>
            <br/>
            {currentRegion && <h4>Стоимость доставки в район {currentRegion}</h4>}
        </div>
    )
}

export default DeliveryRegionsList