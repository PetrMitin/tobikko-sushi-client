import {FC, Fragment, useEffect, useState} from 'react'
import { COUNTDOWN_TEXT_URL } from '../../utils/consts'
import './Countdown.scss'

const Countdown: FC = () => {
    const [countdownToTime, setCountdownToTime] = useState(Date.parse('2022-09-10T11:00+03:00') - Date.now())

    useEffect(() => {
        setInterval(() => setCountdownToTime(Date.parse('2022-09-10T11:00+03:00') - Date.now()), 1000)
        return () => {
            clearInterval()
        }
    }, [])

    const secondsToTime = (secs: number) => {
        let days = Math.floor(secs / (24 * 60 * 60))
        let divisor_for_hours = secs % (24 * 60 * 60)
        let hours = Math.floor(divisor_for_hours / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.floor(divisor_for_seconds);
        let obj = {
            "d": days,
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
      }

      const timeLeft = secondsToTime(countdownToTime / 1000)
      const hours = timeLeft.h < 10 ? `0${timeLeft.h}` : `${timeLeft.h}`
      const minutes = timeLeft.m < 10 ? `0${timeLeft.m}` : `${timeLeft.m}`
      const seconds = timeLeft.s < 10 ? `0${timeLeft.s}` : `${timeLeft.s}`

    return (
        <Fragment>
            <div className="countdown-container" id='countdown-container'>
                <h3>До запуска 
                    {` ${timeLeft.d} д. ${timeLeft.h} ч. ${timeLeft.m} м. ${timeLeft.s} с.`}</h3>
            </div>
            <img src={COUNTDOWN_TEXT_URL} alt="countdown text" />
            <div>
                <a href='#countdown-container'><h3>НАВЕРХ</h3></a>
            </div>
        </Fragment>
    )
}

export default Countdown