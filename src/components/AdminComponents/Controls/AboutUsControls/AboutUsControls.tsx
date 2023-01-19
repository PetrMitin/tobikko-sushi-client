import {FC, useState} from 'react'
import { Button } from 'react-bootstrap'
import ImageControls from './ImageControls/ImageControls'
import ParagraphControls from './ParagraphControls/ParagraphControls'

const AboutUsControls: FC = () => {
    const [whatIsActive, setWhatIsActive] = useState('paragraphs')

    return (
        <div className="about-us-controls">
            <Button onClick={() => setWhatIsActive('paragraphs')}>Редактировать текст</Button>
            <Button onClick={() => setWhatIsActive('images')}>Редактировать изображения</Button>
            {whatIsActive === 'paragraphs' && <ParagraphControls />}
            {whatIsActive === 'images' && <ImageControls />}
        </div>
    )   
}

export default AboutUsControls