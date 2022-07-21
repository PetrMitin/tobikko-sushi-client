import {FC} from 'react'
import { Route, Routes } from 'react-router-dom'
import { adminRoutes } from '../../routes'
import AdminLogoutButton from './AdminLogoutButton'

const AdminControls: FC = () => {
    return (
        <div className="admin-controls">
            <Routes>
                {adminRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />}/>)}
            </Routes>
            <AdminLogoutButton />
        </div>
        )
}

export default AdminControls