import {FC} from 'react'
import AddImageForm from './AddImageForm'
import OldImagesList from './OldImagesList'

const ImageControls: FC = () => {
    return (
        <div className="image-controls">
            <AddImageForm />
            <OldImagesList />
        </div>
    )
}

export default ImageControls