import {FC, useEffect} from "react";
import BasketItemsList from "../../components/BasketComponents/BasketItemsList";
import Footer from "../../components/ReusableComponents/Footer";
import CustomNavbar from "../../components/ReusableComponents/Navbar";
import { UserActionCreators } from "../../store/action-creators";
import { useAppDispatch } from "../../store/hooks";

const Basket: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserActionCreators.getMenuItems())
    }, [])

    return (
        <div id="basket-container">
            <CustomNavbar whatIsActive="basket" />
            <BasketItemsList />
            <Footer />
        </div>
    )
}

export default Basket