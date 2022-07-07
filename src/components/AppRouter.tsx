import {FC, useEffect} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Landing from '../pages/Landing'
import { adminRoutes, publicRoutes } from '../routes'
import { UserActionCreators } from '../store/action-creators'
import { useAppDispatch, useAppSelector } from '../store/hooks'

const AppRouter: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserActionCreators.registrateUser())
    }, [dispatch])

    const isPageDisabled = useAppSelector(state => state.admin?.isPageDisabled)
    const user = useAppSelector(state => state.user?.user)
    const isAdmin = user?.role === 'ADMIN' && user.isConfirmedAdmin && user.isConfirmedEmail

    return (
        <div id="app-router">
            <Routes>
                {(!isPageDisabled && isAdmin) && adminRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />}/>)}
                {!isPageDisabled && publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />}/>)}
                <Route path='/' element={<Landing />} />
                <Route path='*' element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    )
}

export default AppRouter