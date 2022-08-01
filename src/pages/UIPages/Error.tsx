import {FC} from 'react' 
import Footer from '../../components/ReusableComponents/Footer'
import CustomNavbar from '../../components/ReusableComponents/Navbar'
import { useAppSelector } from '../../store/hooks'

const ErrorContainer: FC = () => {
    const error = useAppSelector(state => state.user?.error)

    return (
        <div className="error-container">
            <CustomNavbar />
            <h1>Ошибка!</h1>
            <h2>{error?.message}</h2>
            <Footer />
        </div>
    )
}

export default ErrorContainer