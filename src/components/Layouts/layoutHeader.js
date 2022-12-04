import { Outlet } from "react-router-dom";
import HeaderMain from "../allPages/headerMain/headerMainAll.js";

function LayoutHeader() {
    return (
        <>
        <HeaderMain />
        <Outlet />
        </>
    )
}

export default LayoutHeader;