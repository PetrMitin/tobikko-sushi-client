import {FC, useEffect, useState} from 'react'
import './Countdown.scss'

const Countdown: FC = () => {
    const [countdownToTime, setCountdownToTime] = useState(Date.parse('2022-09-01T11:00+03:00') - Date.now())

    useEffect(() => {
        setInterval(() => setCountdownToTime(Date.parse('2022-09-01T11:00+03:00') - Date.now()), 1000)
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
        let seconds = Math.ceil(divisor_for_seconds);
        let obj = {
            "d": days,
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
      }

      const timeLeft = secondsToTime(countdownToTime / 1000)

    return (
        <div className="countdown-container">
            <h2>Привет. Мы запускаем для Вас новый проект авторской кухни от Создателя Turtle`s Pizza, Вкус Tokyo.
            TOBIKKO SUSHI.RU</h2>
            <img 
                src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18195c8a71a%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18195c8a71a%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.36000137329103%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' 
                alt='Photo' 
            />
            <h3>До запуска 
                {timeLeft.d === 0 ?
                ` ${timeLeft.h}:${timeLeft.m}:${timeLeft.s}` : ` ${timeLeft.d} дней`}</h3>
        </div>
    )
}

export default Countdown