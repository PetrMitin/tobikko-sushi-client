import {FC, useState, useEffect} from "react";
import DeliveryInfoContent from "../../components/DeliveryInfoComponents/DeliveryInfoContent";
import Footer from "../../components/ReusableComponents/Footer";
import CustomNavbar from "../../components/ReusableComponents/Navbar";
import SmallNavbar from "../../components/ReusableComponents/SmallNavbar";

const DeliveryInfo: FC = () => {
    const [dWidth, setDWidth] = useState(window.innerWidth)

    const updateDWidth = () => setDWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', updateDWidth)
        return () => {
            window.removeEventListener('resize', updateDWidth)
        }
    }, [])

    return (
        <div id="delivery-info-container">
            <CustomNavbar whatIsActive={"delivery-info"} />
            {dWidth <= 470 && <SmallNavbar />}
            <DeliveryInfoContent />
            <Footer />
        </div>
    )
}

export default DeliveryInfo