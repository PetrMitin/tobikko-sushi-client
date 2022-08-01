import {FC} from "react";
import AdminLoginForm from "../../components/AdminComponents/AdminLoginForm";
import AdminPannel from "../../components/AdminComponents/AdminPannel";
import Footer from "../../components/ReusableComponents/Footer";
import CustomNavbar from "../../components/ReusableComponents/Navbar";
import { useAppSelector } from "../../store/hooks";

const AdminLoginFormPage: FC = () => {

    return (
        <div id="admin-login-form-container">
            <CustomNavbar />
            <AdminLoginForm />
            <Footer />
        </div>
    )
}

export default AdminLoginFormPage