import {FC, Fragment, useEffect} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import { adminRoutes } from '../../routes'
import AdminLogoutButton from './AdminLogoutButton'
import { useAppDispatch } from '../../store/hooks'
import { UserActionCreators } from '../../store/action-creators'

const AdminControls: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserActionCreators.getMenuItemTypes())
        dispatch(UserActionCreators.getMenuItems())
    }, [dispatch])

    return (
        <div className="admin-controls">
            <AdminLogoutButton />
            <AdminNavbar />
            <Routes>
                {adminRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />}/>)}
            </Routes>
        </div>
        )
}

export default AdminControls