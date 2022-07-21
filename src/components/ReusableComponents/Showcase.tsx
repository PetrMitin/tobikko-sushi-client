import {FC} from 'react'
import { Carousel } from 'react-bootstrap'
import { IImage } from '../../utils/interfaces/UIInterfaces'

const Showcase: FC<{imgs: IImage[]}> = ({imgs}) => {
    return (
        <Carousel slide={true} className='h-10'>
            {imgs.map(({src, alt, label, text}) => (
                                <Carousel.Item key={src}>
                                    <img
                                        className="d-block w-100"
                                        src={src}
                                        alt={alt}
                                    />
                                    <Carousel.Caption>
                                    <h3>{label}</h3>
                                    <p>{text}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
        </Carousel>
    )
}

export default Showcase