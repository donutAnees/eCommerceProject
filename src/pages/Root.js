import { Outlet, ScrollRestoration } from "react-router-dom";
import MainNavigation from "../UI/MainNavigation";

export default function Root(){
    return(
        <>
        <MainNavigation></MainNavigation>
        <Outlet></Outlet>
        <ScrollRestoration/>
        </>
    )
}