import {FC} from "react";
import ContentWithMenu from "../components/ReusableComponents/ContentWithMenu";
import Footer from "../components/ReusableComponents/Footer";
import MenuItemsList from "../components/MenuComponents/MenuItemsList";
import CustomNavbar from "../components/ReusableComponents/Navbar";

const Menu: FC = () => {
    return (
        <div id="menu-container">
            <CustomNavbar whatIsActive="menu" />
            <ContentWithMenu Component={MenuItemsList} />
            <Footer />
        </div>
    )
}

export default Menu