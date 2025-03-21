import { useEffect } from "react";
import { getBlog } from "../../../../utils/firebase-conn.util";


function DevBlog() {

    // next task, add this component to the coding route parnt under outlet.
    // will worry about dynamic fetching later.

    // implement something similar to use fetch later on
    const getBlogData = async () => {
        try {
            await getBlog("coding", "creating-this-blog");
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getBlogData();
    },[]);


    return (
        <>
            
        </>
    )
}

export default DevBlog;