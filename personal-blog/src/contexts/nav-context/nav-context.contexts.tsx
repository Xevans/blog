import { createContext, FC, ReactNode, useState } from "react";
import { NavContextType } from "../../types/nav/types.nav";

export const NavContext = createContext<NavContextType | null>(null);

export const NavProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [current_route, setCurrentRoute] = useState("Home");

    const updateRoute = (route_name: string) => {
        setCurrentRoute(route_name);
    }

    // exposed values
    const value = {
        current_route,
        updateRoute
    }

    return (
        <NavContext.Provider value={value}> {children} </NavContext.Provider>
    );
}

export default NavProvider;

/*export const NavContext = createContext({
    current_route: "",
    updateRoute: () => ""
});

type ContextProviderProps = {
    children?: ReactNode
}

export const NavProvider = ({children}: ContextProviderProps) => {

    const [current_route, setCurrentRoute] = useState("");

    // exposed method to update current_route
    const updateRoute = (route_id: string) => {
        setCurrentRoute(route_id);
    }
    
    // exposed values
    const value = {
        current_route,
        updateRoute
    }

    return (
        <NavContext.Provider value={value}> {children} </NavContext.Provider>
    );


}*/