import {FC, useEffect} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Menu from '../pages/UIPages/Menu'
import { errorRoute, landingRoute, publicRoutes } from '../routes'
import { UserActionCreators } from '../store/action-creators/userActionCreators'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { MENU_ROUTE } from '../utils/consts/routeConsts'

const AppRouter: FC = () => {
    const dispatch = useAppDispatch()

    const isPageDisabled = useAppSelector(state => state.admin?.isPageDisabled)

    useEffect(() => {
        !isPageDisabled && dispatch(UserActionCreators.registrateUser())
    }, [dispatch])

    return (
        <div id="app-router">
            <Routes>
                {!isPageDisabled && publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />}/>)}
                {/* <Route path={errorRoute.path} element={<errorRoute.Component />} /> */}
                <Route path={MENU_ROUTE} element={<Menu/>} /> 
                <Route path='*' element={<Navigate to="/menu" replace />} />
            </Routes>
        </div>
    )
}

export default AppRouter