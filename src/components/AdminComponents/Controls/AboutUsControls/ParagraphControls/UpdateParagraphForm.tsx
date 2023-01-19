import {ChangeEventHandler, FC, useState} from 'react'
import { Button } from 'react-bootstrap'
import { AdminActionCreators } from '../../../../../store/action-creators/adminActionCreators'
import { useAppDispatch } from '../../../../../store/hooks'
import { IAboutUsParagraph } from '../../../../../utils/interfaces/apiInterfaces'

const UpdateParagraphForm: FC<{paragraph: IAboutUsParagraph}> = ({paragraph}) => {
    const dispatch = useAppDispatch()
    const [currText, setCurrText] = useState(paragraph.text)

    const handleParagraphChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => setCurrText(e.target.value)

    const handleUpdateParagraphClick = () => dispatch(AdminActionCreators.updateAboutUsParagraph(paragraph.id, currText))

    const handeIncrementParagraphClick = () => dispatch(AdminActionCreators.incrementAboutUsParagraph(paragraph.id))

    const handeDecrementParagraphClick = () => dispatch(AdminActionCreators.decrementAboutUsParagraph(paragraph.id))

    const handleDeleteParagraphClick = () => dispatch(AdminActionCreators.deleteAboutUsParagraph(paragraph.id))

    return (
        <div className="update-paragraph-form">
            <textarea className="form-control" rows={3} value={currText} onChange={handleParagraphChange} ></textarea>
            <Button onClick={handleUpdateParagraphClick}>Обновить абзац</Button>
            <Button onClick={handeDecrementParagraphClick}>Сдвинуть вверх на 1</Button>
            <Button onClick={handeIncrementParagraphClick}>Сдвинуть вниз на 1</Button>
            <Button onClick={handleDeleteParagraphClick}>Удалить абзац</Button>
        </div>
    )
}

export default UpdateParagraphForm