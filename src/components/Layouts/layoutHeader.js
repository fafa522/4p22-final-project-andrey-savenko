import { Outlet } from "react-router-dom";
import HeaderMain from "../allPages/headerMain/headerMainAll.js";
import "../allPages/headerMain/headerMainAll.css"

function LayoutHeader() {
    return (
        <>
        <HeaderMain />
        <Outlet />
        </>
    )
}

export default LayoutHeader;