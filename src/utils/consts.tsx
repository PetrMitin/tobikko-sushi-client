import { IDeliveryRegion } from "./interfaces/UIInterfaces"

export const API_URL = 'http://localhost:4000'

export const MAIN_LOGO_NO_TEXT_URL = 'https://af12.mail.ru/cgi-bin/readmsg?id=16581398001151717668;0;1;1&mode=attachment&email=petr09mitin@mail.ru&ct=image%2fpng&cn=%d1%80%d1%8b%d0%b1%d0%ba%d0%b0%d0%b2.png&cte=binary'
export const MAIN_LOGO_TEXT_URL = `${API_URL}/main-logo.jpg`
export const TURTLES_LOGO_URL = 'https://e.mail.ru/cgi-bin/getattach?file=turtles+pizza+logo.jpeg&id=16576171480886866705%3B0%3B1&mode=attachment&x-email=petr09mitin%40mail.ru'
export const COUNTDOWN_TEXT_URL = `${API_URL}/countdown-text.jpg`

export const ADMIN_ROUTE = '/admin/*'
export const ADMIN_LOGIN_ROUTE = '/admin-login'
export const ADMIN_PANNEL_ROUTE = '/admin-pannel'
export const ABOUT_RESTAURANT_ROUTE = '/about-restaurant'
export const BASKET_ROUTE = '/basket'
export const DELIVERY_INFO_ROUTE = '/delivery-info'
export const MENU_ROUTE = '/menu'
export const CHECKOUT_ROUTE = '/checkout'
export const ERROR_ROUTE = '/error'

export const deliveryRegions: IDeliveryRegion[] = [
    {name: 'Раменское от 2000р.', price: '150-250 р. (В зависимости от удаленности)'},
    {name: 'Дергаево от 2000р.', price: '250 р.'},
    {name: 'Новое Село от 1000р.', price: '300 р.'},
    {name: 'Пос.Первомайка от 1500р.', price: '400 р.'},
    {name: 'Быково р/с от 2000р.', price: '200 р.'},
    {name: 'Быково н/с от 1000р.', price: '100 р.'},
    {name: 'Удельная р/с от 2000р.', price: '200 р.'},
    {name: 'Удельная н/с от 1000р.', price: '120 р.'},
    {name: 'Ильинский р/с от 2000р.', price: '200-250 р. (В зависимости от удаленности)'},
    {name: 'Кратово р/с от 2000р.', price: '200 р.'},
    {name: 'Малаховка р/с от 2000р.', price: '200-250 р. (В зависимости от удаленности)'},
    {name: 'Малаховка н/с от 1000р.', price: '150-250 р. (В зависимости от удаленности)'},
    {name: 'Пос.Дружба от 2500р.', price: '400 р.'},
    {name: 'Родники от 2000р.', price: '200 р.'},
    {name: 'Вялки от 2000р.', price: '300 р.'},
    {name: 'Хрипань от 2000р.', price: '250 р.'},
    {name: 'Поповка от 2000р.', price: '300 р.'},
    {name: 'Дониское шоссе от 2000р.', price: '250 р.'},
    {name: 'Игумново от 2000р.', price: '300 р.'},
    {name: 'Донино от 2000р.', price: '320 р.'},
    {name: 'Клишева от 2000р.', price: '300 р.'},
    {name: 'Дубовая роща от 2000р.', price: '300 р.'},
    {name: 'Малаховка ж/с', price: '120 р.'},
    {name: 'Пос.Тельмана от 1500р.', price: '100 р.'},
    {name: 'Михайловская Слобода от 1500р.', price: '200 р.'},
    {name: 'Белый берег от 1500р.', price: '150 р.'},
    {name: 'Каменное Тяжино от 2000р.', price: '200 р.'},
    {name: 'Дурниха от 2000р.', price: '180 р.'},
    {name: 'Синьково от 2000р.', price: '200 р.'},
    {name: 'Островцы от 1500р.', price: '150 р.'},
    {name: 'Октябрьский от 1500р.', price: '200 р.'},
    {name: 'Загорного от 2000р.', price: '350 р.'},
    {name: 'Томилино Парк от 2000р.', price: '500 р.'},
    {name: 'Котельники от 5000р.', price: '650 р.'},
    {name: 'Жуковский от 500 р.', price: 'бесплатно'},
    {name: 'Ильинский ж/с от 500 р.', price: 'бесплатно'},
    {name: 'Кратово ж/с от 1500р.', price: 'бесплатно'}
].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))