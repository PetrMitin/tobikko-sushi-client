import { FC } from "react";
import SuccessfulCheckoutMessage from "../../components/CheckoutComponents/SuccessfulCheckoutMessage";
import Footer from "../../components/ReusableComponents/Footer";
import CustomNavbar from "../../components/ReusableComponents/Navbar";

const SuccessfulCheckout: FC = () => {
    return (
        <div className="successful-checkout-container">
            <CustomNavbar />
            <SuccessfulCheckoutMessage />
            <Footer />
        </div>
    )
}

export default SuccessfulCheckout