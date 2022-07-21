import { IAdminData } from "./reduxInterfaces"

export interface IImage {
    src: string,
    alt: string,
    label?: string,
    text?: string
}

export interface IDeliveryRegion {
    name: string,
    price: string
}

export interface ILoginResponse {
    accessToken: string,
    refreshToken: string,
    user: IAdminData
}

export type IPopupState = 'popping' | 'showing' | 'hidden'