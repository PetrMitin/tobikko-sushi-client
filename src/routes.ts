import AdminPage from "./pages/AdminPages/Admin"
import MenuItemsControls from "./components/AdminComponents/Controls/MenuItemsControls/MenuItemsControls"
import TypesControls from "./components/AdminComponents/Controls/TypesControls/TypesControls"
import AboutRestaurant from "./pages/UIPages/AboutRestaurant"
import Basket from "./pages/UIPages/Basket"
import Checkout from "./pages/UIPages/Checkout"
import DeliveryInfo from "./pages/UIPages/DeliveryInfo"
import ErrorContainer from "./pages/UIPages/Error"
import Landing from "./pages/UIPages/Landing"
import Menu from "./pages/UIPages/Menu"
import { IRoute } from "./types/routeTypes"

import { ERROR_ROUTE, ADMIN_ROUTE, ABOUT_RESTAURANT_ROUTE, BASKET_ROUTE, DELIVERY_INFO_ROUTE, MENU_ROUTE, CHECKOUT_ROUTE, ADMIN_MENU_ITEMS_CONTROLS, ADMIN_TYPES_CONTROLS, SUCCESSFUL_CHECKOUT_ROUTE, PUBLIC_OFFER_ROUTE, ABOUT_US_ROUTE, PERSONAL_DATA_AGREEMENT_ROUTE } from "./utils/consts/routeConsts"
import SuccessfulCheckout from "./pages/UIPages/SuccessfulCheckout"
import PublicOffer from "./pages/UIPages/PublicOffer"
import PersonalDataAgreement from "./pages/UIPages/PersonalDataAgreement"

export const landingRoute: IRoute = {
    path: '/about-us',
    Component: Landing
}

export const errorRoute: IRoute = {
    path: ERROR_ROUTE,
    Component: ErrorContainer
}

export const adminRoutes: IRoute[] = [
    {
        path: ADMIN_MENU_ITEMS_CONTROLS,
        Component: MenuItemsControls
    },
    {
        path: ADMIN_TYPES_CONTROLS,
        Component: TypesControls
    }
]

export const publicRoutes: IRoute[] = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: ABOUT_US_ROUTE,
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
        path: PUBLIC_OFFER_ROUTE,
        Component: PublicOffer
    },
    {
        path: CHECKOUT_ROUTE,
        Component: Checkout
    },
    {
        path: SUCCESSFUL_CHECKOUT_ROUTE,
        Component: SuccessfulCheckout
    },
    {
        path: PERSONAL_DATA_AGREEMENT_ROUTE,
        Component: PersonalDataAgreement
    }
]