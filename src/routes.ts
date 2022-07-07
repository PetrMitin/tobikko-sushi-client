import AboutRestaurant from "./pages/AboutRestaurant"
import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import Checkout from "./pages/Checkout"
import DeliveryInfo from "./pages/DeliveryInfo"
import Landing from "./pages/Landing"
import Menu from "./pages/Menu"
import { IRoute } from "./types/routeTypes"
import { ABOUT_RESTAURANT_ROUTE, ADMIN_LOGIN_ROUTE, BASKET_ROUTE, CHECKOUT_ROUTE, DELIVERY_INFO_ROUTE, MENU_ROUTE } from "./utils/consts"

export const landingRoute: IRoute = {
    path: '/',
    Component: Landing
}

export const adminRoutes: IRoute[] = [
]

export const publicRoutes: IRoute[] = [
    {
        path: ADMIN_LOGIN_ROUTE,
        Component: Admin
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