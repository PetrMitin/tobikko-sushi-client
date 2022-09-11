import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AdminActionCreators } from "../../../../store/action-creators/adminActionCreators";
import { useAppDispatch } from "../../../../store/hooks";
import './NewTypeForm.scss'

const NewTypeForm: FC = () => {
    const dispatch = useAppDispatch()
    const [newTypeName, setNewTypeName] = useState('')
    const [newTypeIcon, setNewTypeIcon] = useState<File | null>(null)

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewTypeName(e.target.value)
    }

    const handleIconChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const file = e.target.files?.length && e.target.files[0]
        if (!file) return alert('Invalid file')
        setNewTypeIcon(file)
    }

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        if (!newTypeName || !newTypeIcon) return alert('Проверьте введенные данные!')
        window.alert(newTypeName + ' ' + newTypeIcon + ' UI')
        dispatch(AdminActionCreators.createNewType(newTypeName, newTypeIcon))
        window.location.reload()
    }

    return (
        <div className="new-type-form-container">
            <Form>
                <Form.Label>
                    <h4>Введите название</h4>
                    <Form.Control type='text' placeholder="Введите название" onChange={handleNameChange} />
                </Form.Label>
                <br/>
                <Form.Label>
                    <h4>Выберите иконку (формат .jpg)</h4>
                    <Form.Control type='file' onChange={handleIconChange} />
                </Form.Label>
                <br/>
                <Button onClick={handleSubmit} className='submit-button'>Создать</Button>
            </Form>
        </div>
    )
}

export default NewTypeForm