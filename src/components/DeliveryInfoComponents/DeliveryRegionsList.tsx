import {ChangeEventHandler, FC, useState} from 'react'
import { deliveryRegions } from '../../utils/consts/deliveryInfoConsts'
import { IDeliveryRegion } from '../../utils/interfaces/UIInterfaces'

const DeliveryRegionsList: FC<{variant?: 'invalid' | 'normal', setDeliveryRegion?: React.Dispatch<React.SetStateAction<IDeliveryRegion | null>>}> = ({variant, setDeliveryRegion}) => {
    const [currentRegion, setCurrentRegion] = useState('')

    const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
        setCurrentRegion(e.currentTarget.value)
        if (setDeliveryRegion) {
            setDeliveryRegion(
                deliveryRegions.find(region => region.name === e.currentTarget.value.split(' - ')[0]) || null
            )
        }
    }

    return (
        <div className="delivery-regions-list-container">
            <select onChange={handleSelectChange} className={'form-select ' + (variant === 'invalid' && 'invalid-number')} defaultValue={'default'}>
                <option value='default' disabled>Выберите регион доставки</option>
                {deliveryRegions.map(region => <option key={region.name} value={region.name + ' - ' + region.price}>{region.name}</option>)}
            </select>
            {currentRegion && <><br/><h4>Стоимость доставки в район {currentRegion}</h4></>}
        </div>
    )
}

export default DeliveryRegionsList