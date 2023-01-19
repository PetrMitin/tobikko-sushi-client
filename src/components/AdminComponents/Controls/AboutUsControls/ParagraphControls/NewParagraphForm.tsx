import {FC, useRef, useState} from 'react'
import { Button } from "react-bootstrap";
import { AdminActionCreators } from '../../../../../store/action-creators/adminActionCreators';
import { useAppDispatch } from '../../../../../store/hooks';
import './NewParagraphForm.scss'

const NewParagraphForm: FC<{isActive: boolean, setIsActive: React.Dispatch<React.SetStateAction<boolean>>}> = ({isActive, setIsActive}) => {
    const [currText, setCurrText] = useState('')
    const dispatch = useAppDispatch()
    const textareaElementRef = useRef<HTMLTextAreaElement>(null)
    
    const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => setCurrText(e.target.value)

    const handleSubmitClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(AdminActionCreators.createNewAboutUsParagraph(currText))
        if (textareaElementRef.current) textareaElementRef.current.value = ''
    }

    return (
        <div className={`new-paragraph-form ${isActive && 'active-popup'}`} onClick={(e) => setIsActive(false)}>
            <div className="new-paragraph-form__content" onClick={(e) => e.stopPropagation()}>
                <h1>Создать новый абзац</h1>
                <textarea className="form-control" rows={3} onChange={handleTextChange} ref={textareaElementRef}></textarea>
                <Button onClick={handleSubmitClick}>Создать абзац</Button>
            </div>
        </div>
    )
}

export default NewParagraphForm