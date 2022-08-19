import {FC, useEffect} from "react";
import CheckoutForm from "../../components/CheckoutComponents/CheckoutForm";
import Footer from "../../components/ReusableComponents/Footer";
import CustomNavbar from "../../components/ReusableComponents/Navbar";
import { UserActionCreators } from "../../store/action-creators/userActionCreators";
import { useAppDispatch } from "../../store/hooks";

const Checkout: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(UserActionCreators.getMenuItems())
    }, [])

    return (
        <div id="basket-container">
            <CustomNavbar />
            <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
            <CheckoutForm />
            <Footer />
        </div>
    )
}

export default Checkout