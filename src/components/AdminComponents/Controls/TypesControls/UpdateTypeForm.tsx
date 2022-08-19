import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AdminActionCreators } from "../../../../store/action-creators/adminActionCreators";
import { useAppDispatch } from "../../../../store/hooks";
import { API_URL } from "../../../../utils/consts/urlConsts";
import { IMenuItemType } from "../../../../utils/interfaces/dbInterfaces";

const UpdateTypeForm: FC<{type: IMenuItemType}> = ({type}) => {
    const dispatch = useAppDispatch()
    const [typeName, setTypeName] = useState(type.name)
    const [typeIcon, setTypeIcon] = useState<File | string>(type.icon)

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setTypeName(e.target.value)
    }

    const handleIconChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const file = e.target.files?.length && e.target.files[0]
        if (!file) return alert('Invalid file')
        setTypeIcon(file)
    }

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        if (!typeName || !typeIcon) return alert('Проверьте введенные данные!')
        dispatch(AdminActionCreators.updateType(type.id, typeName, typeIcon instanceof File ? typeIcon : undefined))
        window.location.reload()
    }

    const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        if(!window.confirm('Вы уверены, что хотите удалить этот раздел? Добавлять его к позициям меню после восстановления нужно вручную!')) return 
        dispatch(AdminActionCreators.deleteType(type.id))
        window.location.reload()
    }

    return (
        <div className="new-type-form-container">
            <Form>
                <Form.Label>
                    <h4>Название</h4>
                    <Form.Control type='text' defaultValue={type.name} onChange={handleNameChange} />
                </Form.Label>
                <br/>
                <Form.Label>
                    <h4>Иконка (формат .jpg)</h4>
                    <Form.Control type='file' onChange={handleIconChange} />
                    {typeof typeIcon === 'string' && <img 
                                                        src={`${API_URL}/${typeIcon}`} 
                                                        alt='icon'
                                                        style={{
                                                            width: '20%',
                                                            height: '20%',
                                                            marginTop: '4%'
                                                        }} />}
                </Form.Label>
                <br/>
                <Button onClick={handleSubmit} className='submit-button'>Изменить</Button>
                <br/>
                <Button onClick={handleDelete} className='delete-button'>Удалить</Button>
            </Form>
        </div>
    )
}

export default UpdateTypeForm