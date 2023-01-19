import {FC} from 'react'
import { useAppSelector } from '../../store/hooks'
import './AboutUs.scss'

const AboutUs: FC = () => {
    const aboutUsParagraphs = useAppSelector(state => state.user?.aboutUsParagraphs) || []

    return (
        <div className="about-us">
            <h2>
                О НАС
            </h2>
            <h4>Приветствую Вас!</h4> 
            {aboutUsParagraphs.map(paragraph => (<p key={paragraph.id}>{paragraph.text}</p>))}
            <h4>Я и моя команда ждем Вас на TOBIKKO-SUSHI.RU!</h4>
            <iframe title='yandex-map' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac5ae0af3439345984185c43f5d5e9fe9c3157a73f8d82c42d27340f3b2368c14&amp;source=constructor"></iframe>
        </div>
    )
}

export default AboutUs