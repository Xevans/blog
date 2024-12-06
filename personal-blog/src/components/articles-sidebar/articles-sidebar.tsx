import SidebarArticlePreview from "../sidebar-article-preview/sidebar-article-preview.component";


function ArticlesSidebar() {

    return (
        <>
            <div className="min-w-96 mt-10 sticky top-24">
                
                <div className="flex flex-col p-2">
                    {/*Ideally would render a map of side-preview components*/}
                    <SidebarArticlePreview />
                </div>

                <div className="flex flex-col p-2">
                    {/*Ideally would render a map of side-preview components*/}
                    <SidebarArticlePreview />
                </div>
            </div>
        </>
    )
}

export default ArticlesSidebar;