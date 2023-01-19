import {FC, useState} from 'react'
import { Button } from 'react-bootstrap'
import { useAppSelector } from '../../../../../store/hooks'
import NewParagraphForm from './NewParagraphForm'
import UpdateParagraphForm from './UpdateParagraphForm'

const ParagraphControls: FC = () => {
    const [isNewParagraphActive, setIsNewParagraphActive] = useState(false)
    const aboutUsParagraphs = useAppSelector(state => state.user?.aboutUsParagraphs) || []
    
    return (
        <div className="paragraph-controls">
            <Button onClick={() => setIsNewParagraphActive(true)}>Новый абзац</Button>
            <NewParagraphForm isActive={isNewParagraphActive} setIsActive={setIsNewParagraphActive} />
            {aboutUsParagraphs.map(paragraph => <UpdateParagraphForm paragraph={paragraph} key={paragraph.id} />)}
        </div>
    )
}

export default ParagraphControls