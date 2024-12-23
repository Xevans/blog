import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavContext } from "../../contexts/nav-context/nav-context.contexts";
import { NavContextType } from "../../types/nav/types.nav";

function Writing() {

    const {current_route, updateRoute} = useContext(NavContext) as NavContextType;

    useEffect(() => {
        if (current_route !== "writing") {
            updateRoute("writing");
        }
    });

    return (
        <>
            <Outlet/>
        </>
    )
}

export default Writing;