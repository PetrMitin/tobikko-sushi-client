import {FC} from 'react'
import { useAppSelector } from '../../../../../store/hooks'
import OldImageForm from './OldImageForm'

const OldImagesList: FC = () => {
    const images = useAppSelector(state => state.user?.aboutUsImages) || []
    
    return (
        <div className="old-images-list">
            {images.map(image => <OldImageForm image={image} key={image.id} />)}
        </div>
    )
}

export default OldImagesList