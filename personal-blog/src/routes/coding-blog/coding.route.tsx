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

            {/*Renders a list of articles (dont worry about db for now). 
            Just simulate what would be in a DB*/}

            <div className="dark:bg-gray-900">
                <Outlet/>
            </div>


            {/*
            <div className="items-center justify-center dark:text-slate-100">

                <div className="flex grid-cols-4 gap-4">
                    <div className="flex flex-col">
                        <div className="dark:bg-slate-700 p-16 mt-8 rounded-md">
                            <h4 className="text-xl">Projects / Coding</h4>
                            <h2 className="text-3xl">Developer Journey</h2>

                            <p className="pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus, enim ipsam earum doloribus in exercitationem laboriosam deserunt, cupiditate ullam illum vitae repellat optio eos dicta quo distinctio non accusamus.</p>
                        </div>
                        <div>
                            <BlogArticle />
                        </div>
                    </div>

                    <div>
                        <ArticlesSidebar />
                    </div>
                </div>
            </div>*/}

        </>
    )
}

export default Coding;