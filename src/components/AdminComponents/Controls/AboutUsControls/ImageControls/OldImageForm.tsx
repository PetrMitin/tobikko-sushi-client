import {FC, MouseEventHandler} from 'react'
import { Button } from 'react-bootstrap'
import { AdminActionCreators } from '../../../../../store/action-creators/adminActionCreators'
import { useAppDispatch } from '../../../../../store/hooks'
import { IImage } from '../../../../../utils/interfaces/UIInterfaces'
import './OldImageForm.scss'

const OldImageForm: FC<{image: IImage}> = ({image}) => {
    const {id, src} = image
    const dispatch = useAppDispatch()

    const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(AdminActionCreators.deleteAboutUsImage(id))
    }

    return (
        <div className="old-image-form">
            <img src={src} className='old-image-form__image' />
            <Button onClick={handleDeleteClick} className='old-image-form__delete-button'>Удалить</Button>
        </div>
    )
}

export default OldImageForm