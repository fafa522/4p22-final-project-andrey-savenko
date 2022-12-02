import { Outlet } from "react-router-dom";
import HeaderMain from "../allPages/headerMain/headerMain";

function LayoutHeader() {
    return (
        <>
        <HeaderMain />
        <Outlet />
        </>
    )
}

export default LayoutHeader;