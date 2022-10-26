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

export interface IError {
    message: string,
    type: string
}

export type IPopupState = 'popping' | 'showing' | 'hidden'

export type IStorageFlag = '0' | '1' | null