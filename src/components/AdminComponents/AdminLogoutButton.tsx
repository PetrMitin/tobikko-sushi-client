import {FC, MouseEventHandler} from 'react'
import { Button } from 'react-bootstrap'
import { AdminActionCreators } from '../../store/action-creators'
import { useAppDispatch } from '../../store/hooks'

const AdminLogoutButton: FC = () => {
    const dispatch = useAppDispatch()

    const handleLogout: MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(AdminActionCreators.logoutAdmin())
    }

    return (
        <Button variant='danger' onClick={handleLogout}>ВЫЙТИ</Button>
    )
}

export default AdminLogoutButton