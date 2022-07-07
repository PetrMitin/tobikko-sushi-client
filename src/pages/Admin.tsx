import {FC, MouseEventHandler, useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import CustomNavbar from "../components/Navbar";
import { AdminActionCreators } from "../store/action-creators";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Admin: FC = () => {
    const dispatch = useAppDispatch()
    const [isPageDisabled, setIsPageDisabled] = useState(!!useAppSelector(state => state.admin?.isPageDisabled))

    useEffect(() => {
        dispatch(AdminActionCreators.setIsPageDisabled(isPageDisabled))
    }, [isPageDisabled, dispatch])

    const handleSwitchDisabledClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        setIsPageDisabled(prev => !prev)
    }

    return (
        <div id="admin-container">
            <CustomNavbar />
            <Footer />
        </div>
    )
}

export default Admin