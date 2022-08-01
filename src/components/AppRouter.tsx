import {FC, useEffect} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { errorRoute, landingRoute, publicRoutes } from '../routes'
import { UserActionCreators } from '../store/action-creators'
import { useAppDispatch, useAppSelector } from '../store/hooks'

const AppRouter: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserActionCreators.registrateUser())
    }, [dispatch])

    const isPageDisabled = useAppSelector(state => state.admin?.isPageDisabled)
    const adminData = useAppSelector(state => state.admin?.adminData)
    const isAdmin = adminData?.role === 'ADMIN' && adminData?.isConfirmedAdmin && adminData?.isConfirmedEmail

    return (
        <div id="app-router">
            <Routes>
                {!isPageDisabled && publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />}/>)}
                <Route path={errorRoute.path} element={<errorRoute.Component />} />
                <Route path={landingRoute.path} element={<landingRoute.Component />} />
                <Route path='*' element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    )
}

export default AppRouter