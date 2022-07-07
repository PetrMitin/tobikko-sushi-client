import {FC} from "react";
import Footer from "../components/Footer";
import CustomNavbar from "../components/Navbar";

const Checkout: FC = () => {
    return (
        <div id="basket-container">
            <CustomNavbar />
            <h1>CHECKOUT</h1>
            <Footer />
        </div>
    )
}

export default Checkout