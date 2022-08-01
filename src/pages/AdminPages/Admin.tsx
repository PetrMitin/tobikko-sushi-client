import {FC} from 'react'
import { useAppSelector } from '../../store/hooks'
import AdminLoginFormPage from './AdminLoginFormPage'
import AdminPannelPage from './AdminPannelPage'


const AdminPage: FC = () => {
    const isLoggedIn = useAppSelector(state => state.admin?.isLoggedIn)

    return isLoggedIn ? <AdminPannelPage /> : <AdminLoginFormPage />
}

export default AdminPage