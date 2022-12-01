import { useAppSelector } from "../store/hooks"

export const useTotalDiscountMuliplier = (): number => {
    const discounts = useAppSelector(state => state.user?.totalDiscounts) || []
    let totalMultiplier = 1
    discounts.forEach(elem => totalMultiplier -= 1-elem.multiplier)
    return totalMultiplier
}

export const useTotalPercentDiscount = (): string => {
    const totalMultiplier = useTotalDiscountMuliplier()
    const multInPercentStr = Math.round((1-totalMultiplier)*100).toString() + '%'
    return multInPercentStr
}