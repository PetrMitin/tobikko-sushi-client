import AdminPannelPage from "./pages/AdminPannelPage"
import AboutRestaurant from "./pages/AboutRestaurant"
import AdminLoginFormPage from "./pages/AdminLoginFormPage"
import Admin from "./pages/AdminLoginFormPage"
import Basket from "./pages/Basket"
import Checkout from "./pages/Checkout"
import DeliveryInfo from "./pages/DeliveryInfo"
import ErrorContainer from "./pages/Error"
import Landing from "./pages/Landing"
import Menu from "./pages/Menu"
import { IRoute } from "./types/routeTypes"
import { ABOUT_RESTAURANT_ROUTE, ADMIN_LOGIN_ROUTE, ADMIN_PANNEL_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, CHECKOUT_ROUTE, DELIVERY_INFO_ROUTE, ERROR_ROUTE, MENU_ROUTE } from "./utils/consts"
import AdminPage from "./pages/Admin"

export const landingRoute: IRoute = {
    path: '/',
    Component: Landing
}

export const errorRoute: IRoute = {
    path: ERROR_ROUTE,
    Component: ErrorContainer
}

export const adminRoutes: IRoute[] = [
]

export const publicRoutes: IRoute[] = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: '/',
        Component: Landing
    },
    {
        path: ABOUT_RESTAURANT_ROUTE,
        Component: AboutRestaurant
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: DELIVERY_INFO_ROUTE,
        Component: DeliveryInfo
    },
    {
        path: MENU_ROUTE,
        Component: Menu
    },
    {
        path: CHECKOUT_ROUTE,
        Component: Checkout
    }
]