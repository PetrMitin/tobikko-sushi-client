import {FC, useEffect, useState} from 'react' 
import MenuTypesList from '../MenuComponents/MenuTypesList'
import './ContentWithMenu.scss'

const ContentWithMenu: FC<{Component: FC}> = ({Component}) => {
    const [dWidth, setDWidth] = useState(window.innerWidth)
    const variant = dWidth > 1040 ? 'vertical' : 'horizontal'

    const updateDWidth = () => setDWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', updateDWidth)
        return () => {
            window.removeEventListener('resize', updateDWidth)
        }
    }, [])

    return (
        <div className={`content-with-menu ${variant}`}>
                <MenuTypesList variant={variant} />
                <Component />
            </div>
    )
}

export default ContentWithMenu