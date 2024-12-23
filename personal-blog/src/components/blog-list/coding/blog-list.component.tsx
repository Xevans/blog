import { Link } from "react-router-dom";


function BlogList() {
    // props = category {Programming}
    return (
        <>
            <div className="ml-auto mr-auto pt-24">

                <div className="grid grid-cols-2 gap-10 max-w-4xl ml-auto mr-auto">
                    <div className="dark:text-white font-semibold text-3xl">
                        Dev Blogs
                    </div>
                    <div></div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600">
                        <Link to="mission">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                My Developer Journey.
                            </h5>

                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                            </p>
                        </Link>
                        
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Creating Local History Archives. My First MERN App.
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Creating This Blog.
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Pursuing Game Engine Development.
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            My first time working on a VR game in Unreal Engine 5.
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            My Favorite Web Technologies.
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

export default BlogList;