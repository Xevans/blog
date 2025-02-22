import { useContext, useEffect } from "react";
import FeaturedBlogPreview from "../../components/featured-blog-preview/featured-blogs.component";
import HomeBanner from "../../components/home-banner/home-banner.component";
import PersonalMessage from "../../components/personal-message/personal-message.component";
import { NavContext } from "../../contexts/nav-context/nav-context.contexts";
import { NavContextType } from "../../types/nav/types.nav";
//import { getBlogs } from "../../utils/firebase-conn.util";
//import { BlogStorageType } from "../../types/firestore/blog/types.blog";

function Home() {
    //see https://blog.logrocket.com/how-to-use-react-context-typescript/
    // as creaving a context using typescript is very different.
    const {current_route, updateRoute} = useContext(NavContext) as NavContextType;


    /*const doUpload = async () => {
        const file: BlogStorageType = {
            "Category": "Projects/Coding",
            "title": "Making This Blog",
            "date": "specify when packing",
            "blurb": "summary of blog", 
            "tags": ["Web Dev", "Dev Diary"],
            "content": "Put Markup, img indicators here",
            "media": [0, 1, 2, 3],
            "media_caption": ["caption1", "", "caption3", "caption4"],
            "media_attribution": ["attr1", "", "attr3", "attr4"],
            "media_links": ["https://link1.zzz", "https://link2.zzz", "https://link3.zzz", "https://link4.zzz"]
        };

        uploadBlog("blogs", file);
    }*/

    /*const readBlogs = async () => {
        getBlogs("featured-blogs");
    }*/

    useEffect(() => {
        if (current_route !== "Home") {
            updateRoute("Home");
        }

        //readBlogs();
        
    });


    return (
        <>
            <title> Xavier's Blog </title>
            <div className="min-h-screen dark:bg-slate-900">

                <div className="flex items-center justify-center">
                    <PersonalMessage />
                </div>

                <div>
                    <HomeBanner />
                </div>
                
                <div>
                    <FeaturedBlogPreview />
                </div>

            </div>
        </>


    )
}

export default Home;