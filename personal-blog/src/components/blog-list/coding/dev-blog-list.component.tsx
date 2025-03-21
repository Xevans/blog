import { Link } from "react-router-dom";
import { getBlogList } from "../../../utils/firebase-conn.util";
import { useEffect, useState } from "react";
import { BlogListData } from "../../../interfaces/blog-interface";


function DevBlogList() {

    const [blog_list, setBlogList] = useState<BlogListData[]>();
    const [ isVisible, setIsVisible ] = useState(false);

    
    const getList = async () => {
        try {
            
            const list = await getBlogList("coding");

            if (list) {
                setBlogList(list);
            }

        } catch (error) {
            console.error(error);
        }
    }

    

    useEffect(() => {
        try {
            getList();
            setIsVisible(true);
        } catch (e) {
            setIsVisible(false);
            console.log(e);
        }

    },[]);


    // might use
    /*function trimTitle(text: string) {

        const threshold = 25;
        if (text.length <= threshold) return text;
        const postfix = "...";
        const words = text.split(" ");
        let new_word = "";

        words.forEach(word => {
            if (new_word.length + 3 >= threshold) {
                return new_word + postfix;
            }
            new_word = new_word + word + " ";
        });

        return new_word;
    }*/

    function trimSummary(text: string) {

        const threshold = 180; // 180
        if (text.length <= threshold) return text;

        const postfix = "...";
        const words = text.split(" ");
        let new_word = "";

        words.forEach(word => {
            console.log(new_word);
            if (new_word.length + 3 >= threshold) { // covering 8 // considers space after word
                return new_word + postfix;
            }
            new_word = new_word + word + " ";
        });

        return new_word + postfix; // technically should never run.
    }


    function convertSecondsToDate(seconds: number) {
        const milliseconds = seconds * 1000;
        const date = new Date(milliseconds);
        return date.toDateString();
    }

    return (
        <>
            <title> Dev Blogs </title>


            
            <div className="ml-auto mr-auto pt-24 dark:bg-gray-900 min-h-screen">

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl ml-auto mr-auto pb-32 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="dark:text-white font-semibold text-3xl">
                        Dev Blogs
                    </div>
                    <div></div>

                    {
                        blog_list &&

                        blog_list.map((blog, key) => {
                            const { 
                                blog_id, 
                                header, 
                                creation_time 
                            } = blog;
                            
                            const {
                                title,
                                //category,
                                summary,
                                //featured_media_link
                            } = header;
                            

                            return (
                                <div key={key} className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-gray-600 hover:bg-gray-400">
                                    <Link to={`diary/${blog_id}`}> 
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {title}
                                        </h5>

                                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                            {trimSummary(summary)}
                                        </p>

                                        <div className="dark:text-white flex flex-row-reverse">
                                            <p className="font-bold">{convertSecondsToDate(creation_time)}</p>
                                        </div>
                                    </Link>
                                    
                                </div>
                            );
                        })
                    }

                </div>

            </div> 



            
            {/*
            <div className="ml-auto mr-auto pt-24 dark:bg-gray-900 min-h-screen">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl ml-auto mr-auto pb-32">
                    <div className="dark:text-white font-semibold text-3xl">
                        Dev Blogs
                    </div>
                    <div></div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-gray-600 hover:bg-gray-400">
                        <Link to={`diary/${"creating-this-blog"}`}> 
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Creating This Blog.
                            </h5>

                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Covering the reason behind creating this blog, technologies used, some challenges, rant, my spritual Typescript conversion and a kickoff message to commemorate the first entry!
                            </p>
                        </Link>
                        
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Creating Local History Archives. Applying Full Stack Topology.
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Dabbling Into Game Dev.
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Pursuing Game Engine Development - Long Term.
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Favorite Web Technologies.
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                </div>

            </div> */}
        </>
    )
}

export default DevBlogList;