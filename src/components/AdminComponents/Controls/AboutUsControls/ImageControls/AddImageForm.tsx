import {ChangeEventHandler, FC, MouseEventHandler, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { AdminActionCreators } from '../../../../../store/action-creators/adminActionCreators'
import { useAppDispatch } from '../../../../../store/hooks'

const AddImageForm: FC = () => {
    const [currImage, setCurrImage] = useState<File | null>(null)
    const dispatch = useAppDispatch()

    const handleImageChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const file = e.target.files?.length && e.target.files[0]
        if (!file) return window.alert('Invalid file')
        setCurrImage(file)
    } 

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!currImage) return
        const imgData = new FormData()
        imgData.append('image', currImage)
        dispatch(AdminActionCreators.addAboutUsImage(imgData))
        
    }

    return (
        <div className="add-image-form">
            <h3>Добавить изображение (формат .jpg/.jpeg/.png)</h3>
            <Form.Control type='file' onChange={handleImageChange} />
            {currImage && <Button onClick={handleSubmit}>Добавить изображение</Button>}
        </div>
    )
}

export default AddImageForm