import {FC} from 'react'
import AdminPannel from '../../components/AdminComponents/AdminPannel'
import Footer from '../../components/ReusableComponents/Footer'
import CustomNavbar from '../../components/ReusableComponents/Navbar'

const AdminPannelPage: FC = () => {
    return (
        <div className="admin-pannel-container">
            <AdminPannel />
        </div>
    )
}

export default AdminPannelPage