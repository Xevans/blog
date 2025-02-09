import { useContext, useEffect } from "react";
import BlogPreview from "../../components/blog-preview/blog-preview.component";
//import PersonalMessage from "../../components/personal-message/personal-message.component";
import HomeBanner from "../../components/home-banner/home-banner.component";
import PersonalMessage from "../../components/personal-message/personal-message.component";
import { NavContext } from "../../contexts/nav-context/nav-context.contexts";
import { NavContextType } from "../../types/nav/types.nav";

function Home() {
    //see https://blog.logrocket.com/how-to-use-react-context-typescript/
    // as creaving a context using typescript is very different.
    const {current_route, updateRoute} = useContext(NavContext) as NavContextType;

    useEffect(() => {
        if (current_route !== "Home") {
            updateRoute("Home");
        }
    });


    return (
        <>
            <title> Xavier's Blog </title>
            <div>

                <div className="flex items-center justify-center">
                    <PersonalMessage />
                </div>

                <div>
                    <HomeBanner />
                </div>
                
                <div>
                    <BlogPreview />
                </div>

            </div>
        </>


    )
}

export default Home;