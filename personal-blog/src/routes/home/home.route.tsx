import { useEffect } from "react";
import BlogPreview from "../../components/blog-preview/blog-preview.component";
import PersonalMessage from "../../components/personal-message/personal-message.component";

function Home() {

    useEffect(() => {
        console.log('test');
    })
    return (
        <>
            <div>

                <div className="flex items-center justify-center">
                    <PersonalMessage />
                </div>
                
                <div>
                    <BlogPreview />
                </div>

            </div>
        </>


    )
}

export default Home;