import { IError, IImage } from "../interfaces/UIInterfaces";
import { API_URL } from "./urlConsts";

export const INVALID_PHONE_ERROR: IError = {
    type: 'INVALID_PHONE_ERROR',
    message: 'Проверьте правильность введённого номера телефона!'
}

export const INVALID_EMAIL_ERROR: IError = {
    type: 'INVALID_EMAIL_ERROR',
    message: 'Проверьте правильность введённой почты!'
}

export const EMPTY_ADDRESS_ERROR: IError = {
    type: 'EMPTY_ADDRESS_ERROR',
    message: 'Введите адрес!'
}

export const EMPTY_DELIVERY_REGION_ERROR: IError = {
    type: 'EMPTY_DELIVERY_REGION_ERROR',
    message: 'Выберите регион доставки!'
}

export const EMPTY_NAME_ERROR: IError = {
    type: 'EMPTY_NAME_ERROR',
    message: 'Введите Ваше имя!'
}

export const imgs: IImage[] = [
    {
        src: `https://e.mail.ru/cgi-bin/getattach?file=IMG_7531.jpg&id=16576525211722657325%3B0%3B1&mode=attachment&x-email=petr09mitin%40mail.ru`, 
        alt: 'Пятый слайд'
    }
]