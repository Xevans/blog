import { Link } from "react-router-dom";
import { getBlogList } from "../../../utils/firebase-conn.util";
import { useEffect, useState } from "react";
import { BlogListData } from "../../../interfaces/blog-interface.inteface";


function WritingBlogList() {

    const [blog_list, setBlogList] = useState<BlogListData[]>();
    const [ isVisible, setIsVisible ] = useState(false);

    
    const getList = async () => {
        try {
            
            const list = await getBlogList("writing");

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

            <title> Writing Blogs </title>

            <div className="ml-auto mr-auto pt-24 dark:bg-gray-900 min-h-screen">

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl ml-auto mr-auto pb-32 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="dark:text-white font-semibold text-3xl">
                        Writing Blogs
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
                        Writing Blogs
                    </div>
                    <div></div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-gray-600 hover:bg-gray-400">
                        <Link to="story-overview">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Get to know my story: Awakening!
                            </h5>

                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                So, is it one of those transported to another world deals or what? Mmm, not quite, but I understand why you would think so. Awakening is... 
                            </p>
                        </Link>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Denny and Yune. Creating a Dynamic Within Yourself.
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Writing Two Worlds Through the Eyes of One.
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Why I chose to write in first person for a story with complex worlds, and characters. Why not make things easier with an all-knowing view? [cut off] Hint: It's all about how it's portrayed. That's where the magic is.
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Soul: A Formless Magic with Infinite Potential
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            People change and no two are the same. That's what makes it such an interesting tool in a fantasy context. Plus it's an awesome excuse for [cut-off] characters to pull off insane feats.
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            The Myseterious Weapons in Awakening.
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                </div>

            </div>
            */}
        </>
    )
}

export default WritingBlogList;