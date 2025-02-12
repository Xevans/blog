import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavContext } from "../../contexts/nav-context/nav-context.contexts";
import { NavContextType } from "../../types/nav/types.nav";

function Writing() {

    const {current_route, updateRoute} = useContext(NavContext) as NavContextType;

    useEffect(() => {
        // ensure nav context is correct even if route is visited from external source
        if (current_route !== "Writing Blog") {
            updateRoute("Writing Blog");
        }
    });

    return (
        <>
            <Outlet/>
        </>
    )
}

export default Writing;