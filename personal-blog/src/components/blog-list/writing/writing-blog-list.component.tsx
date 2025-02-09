import { Link } from "react-router-dom";


function WritingBlogList() {

    return (
        <>
            <title> Blog List </title>
            <div className="ml-auto mr-auto pt-24 dark:bg-gray-900 h-screen">

                <div className="grid grid-cols-2 gap-10 max-w-4xl ml-auto mr-auto">
                    <div className="dark:text-white font-semibold text-3xl">
                        Writing Blogs
                    </div>
                    <div></div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600">
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
        </>
    )
}

export default WritingBlogList;