import ArticlesSidebar from "../../components/articles-sidebar/articles-sidebar";
import BlogArticle from "../../components/blog-article/blog-article";

function Coding() {

    return (
        <>
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
            </div>

        </>
    )
}

export default Coding;