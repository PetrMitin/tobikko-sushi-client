import {FC} from "react";
import BasketItemsList from "../components/BasketItemsList";
import Footer from "../components/Footer";
import CustomNavbar from "../components/Navbar";

const Basket: FC = () => {
    return (
        <div id="basket-container">
            <CustomNavbar whatIsActive="basket" />
            <BasketItemsList />
            <Footer />
        </div>
    )
}

export default Basket