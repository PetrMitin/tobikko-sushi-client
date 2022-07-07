import {FC} from "react";
import ContentWithMenu from "../components/ContentWithMenu";
import Footer from "../components/Footer";
import MenuItemsList from "../components/MenuItemsList";
import CustomNavbar from "../components/Navbar";

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