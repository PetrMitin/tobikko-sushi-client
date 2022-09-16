import { ChangeEventHandler, FC, Fragment, MouseEventHandler, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AdminActionCreators } from "../../../../store/action-creators/adminActionCreators";
import { UserActionCreators } from "../../../../store/action-creators/userActionCreators";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { API_URL } from "../../../../utils/consts/urlConsts";
import { IMenuItemInfoData, IMenuItemData } from "../../../../utils/interfaces/apiInterfaces";
import { IMenuItem, IMenuItemType } from "../../../../utils/interfaces/dbInterfaces";
import NewMenuItemInfo from "./NewMenuItemInfo";
import NewMenuItemType from "./NewMenuItemType";

const UpdateMenuItemForm: FC<{item: IMenuItem}> = ({item}) => {
    const dispatch = useAppDispatch()
    const [name, setName] = useState(item.name)
    const [price, setPrice] = useState(item.price)
    const [massInGramms, setMassInGramms] = useState(item.massInGramms)
    const [newImage, setNewImage] = useState<File | null>(null)
    const [currentInfoTitle, setCurrentInfoTitle] = useState('')
    const [currentInfoText, setCurrentInfoText] = useState('')
    const [infoArray, setInfoArray] = useState<IMenuItemInfoData[]>(item.menu_item_infos)
    const [typesArray, setTypesArray] = useState<IMenuItemType[]>(item.menu_item_types)
    const menuItemTypes = useAppSelector(state => state.user?.menuItemTypes) || []

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value)
    }

    const handlePriceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setPrice(parseInt(e.target.value))
    }

    const handleMassChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setMassInGramms(parseInt(e.target.value))
    }

    const handleInfoTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setCurrentInfoTitle(e.target.value)
    }

    const handleInfoTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setCurrentInfoText(e.target.value)
    }

    const handleAddInfo: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!currentInfoText || !currentInfoTitle) return window.alert('Некорректные данные!')
        setInfoArray(prev => [...prev, {title: currentInfoTitle, info: currentInfoText}])
        setCurrentInfoTitle('')
        setCurrentInfoText('')
    }

    const handleImageChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const file = e.target.files?.length && e.target.files[0]
        if (!file) return alert('Invalid file')
        setNewImage(file)
    }

    const handleTypeSelect: ChangeEventHandler<HTMLSelectElement>  = (e) => {
        const selectedId = parseInt(e.target.value)
        const selectedType = menuItemTypes.find(type => type.id === selectedId)
        if (!selectedType) return
        setTypesArray(prev => [...prev, selectedType])
    }

    const deleteInfoByTitle = (title: string) => {
        setInfoArray(prev => prev.filter(info => info.title !== title))
    }

    const deleteTypeById = (typeId: number) => {
        setTypesArray(prev => prev.filter(type => type.id !== typeId))
    }

    const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!window.confirm(`Вы уверены, что хотите удалить позицию ${item.name}?`)) return
        dispatch(AdminActionCreators.deleteMenuItem(item.id))
        window.location.reload()
        dispatch(UserActionCreators.getMenuItems())
    }

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        const newMenuItem: IMenuItemData = {
            name: name,
            price: price,
            massInGramms: massInGramms,
            image: newImage ? newImage : undefined,
            menuItemTypesId: typesArray.map(type => type.id),
            info: infoArray
        }
        window.alert(JSON.stringify(newMenuItem))
        dispatch(AdminActionCreators.updateMenuItem(item.id, newMenuItem))
        //window.location.reload()
        dispatch(UserActionCreators.getMenuItems())
    }

    return (
        <div className="new-menu-item-form">
            <h2>{item.name}</h2>
            <Form>
                <Form.Label>
                    <h4>Введите название</h4>
                    <Form.Control defaultValue={name} type='text' placeholder="Введите название" onChange={handleNameChange} />
                </Form.Label>
                <br/>
                <Form.Label>
                    <h4>Введите цену (р)</h4>
                    <Form.Control defaultValue={price} type='number' placeholder="Введите цену" onChange={handlePriceChange} />
                </Form.Label>
                <br/>
                <Form.Label>
                    <h4>Введите массу в граммах</h4>
                    <Form.Control defaultValue={massInGramms} type='number' placeholder="Введите массу в граммах" onChange={handleMassChange} />
                </Form.Label>
                <br/>
                <Form.Label>
                    <h4>Выберите фото (формат .jpg)</h4>
                    <Form.Control type='file' onChange={handleImageChange} />
                    {!newImage && <img src={`${API_URL}/${item.image}`} style={{width: '20%', height: '20%'}} />}
                </Form.Label>
                <br/>
                <h4>Разделы меню</h4>
                <Form.Select onChange={handleTypeSelect} value={typesArray.length > 0 ? typesArray[typesArray.length-1].id : 'default'}>
                    <option value='default' disabled>Выберите разделы меню</option>
                    {menuItemTypes.map(type => <option value={type.id} key={type.id}>{type.name}</option>)}
                </Form.Select>
                {typesArray.map(type => 
                <div key={type.id} className='new-type-container'>
                    <NewMenuItemType type={type} />
                    <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation()
                        deleteTypeById(type.id)
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg></Button>
                </div>
                )}
                <h4>Описания</h4>
                <Form.Control 
                    type='text' 
                    placeholder='Введите заголовок описания (например, "Рецепт")' 
                    onChange={handleInfoTitleChange}
                    value={currentInfoTitle} />
                <Form.Control 
                    type='text' 
                    placeholder="Введите описание" 
                    onChange={handleInfoTextChange}
                    value={currentInfoText} />
                <Button onClick={handleAddInfo}>Добавить описание</Button>
                <br/>
                {infoArray.map(info => <div key={info.title} className='new-info-container'>
                    <NewMenuItemInfo info={info} />
                    <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation()
                        deleteInfoByTitle(info.title)
                    }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg></Button>
                  <br/>
                </div>)}
                <br/>
                <Button onClick={handleSubmit} className='submit-button'>ОБНОВИТЬ</Button>
                <br/>
                <Button onClick={handleDelete} className='delete-button'>УДАЛИТЬ ПОЗИЦИЮ</Button>
            </Form>
        </div>)
}

export default UpdateMenuItemForm