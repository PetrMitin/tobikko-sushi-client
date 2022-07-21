import {FC} from 'react'
import { useAppSelector } from '../../store/hooks'
import AdminControls from './AdminControls'
import Footer from '../ReusableComponents/Footer'
import CustomNavbar from '../ReusableComponents/Navbar'

const AdminPannel: FC = () => {
    const adminData = useAppSelector(state => state.admin?.adminData)

    return (
        <div className="admin-pannel-container">
            <CustomNavbar />
            <h1>Панель администратора</h1>
            {!adminData?.isConfirmedAdmin && <h2>Ответственное лицо не подтвердило вашу почту!</h2>}
            {!adminData?.isConfirmedEmail && <h2>Вы не подтвердили вашу почту!</h2>}
            {(adminData?.isConfirmedAdmin && adminData?.isConfirmedEmail) && <AdminControls />}
            <Footer />
        </div> 
    )
}

export default AdminPannel