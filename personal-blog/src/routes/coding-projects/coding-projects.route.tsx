import { useContext, useEffect } from "react";
import { NavContext } from "../../contexts/nav-context/nav-context.contexts";
import { NavContextType } from "../../types/nav/types.nav";
import { Outlet } from "react-router-dom";

function CodingProjects() {

    const {current_route, updateRoute} = useContext(NavContext) as NavContextType;

    useEffect(() => {
        // ensure nav context is correct even if route is visited from external source
        if (current_route !== "Coding Projects") {
            updateRoute("Coding Projects");
        }
    });

    return (
        <>
            <Outlet />
        </>
    )
}

export default CodingProjects;