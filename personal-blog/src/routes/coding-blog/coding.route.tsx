//import ArticlesSidebar from "../../components/articles-sidebar/articles-sidebar";
//import BlogArticle from "../../components/blog-article/blog-article";

import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavContext } from "../../contexts/nav-context/nav-context.contexts";
import { NavContextType } from "../../types/nav/types.nav";

function Coding() {

    const {current_route, updateRoute} = useContext(NavContext) as NavContextType;

    useEffect(() => {
        // ensure nav context is correct even if route is visited from external source
        if (current_route !== "Dev Blog") {
            updateRoute("Dev Blog");
        }
    });


    return (
        <>

            <div className="dark:bg-gray-900">
                <Outlet/>
            </div>

        </>
    )
}

export default Coding;