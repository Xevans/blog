import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FeaturedBlogStorageType } from "../../types/firestore/featured-blog/featured-blog.type";
import { getPreviews } from "../../utils/firebase-conn.util";
//import { MenuItem } from "@headlessui/react";

function FeaturedBlogPreview() {

    const [ previews, setPreviews ] = useState<FeaturedBlogStorageType[]>([]); // Array of Blog Previews 
    const [ isVisible, setIsVisible ] = useState(false);

    const fetchPreviews = async() => {
        const data = await getPreviews("featured-blogs"); // this line drove me crazy. needed await
        if (data) { 
            setPreviews(data);
        }
    }

    // on mount, fetch the featured blogs and load them into state
    useEffect(() => {
        try {
            fetchPreviews();
            setIsVisible(true);
        } catch (e) {
            setIsVisible(false);
            console.log(e);
        }
        
    },[]);


    // render each state object to the screen
    return (
        <>
            <section className="px-6 py-10 mx-auto mb-10">
                <div className="container px-6 py-10 mx-auto ">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Featured Blogs</h1>
                    </div>

                    <hr className="my-8 border-gray-200 dark:border-gray-700" />

                    <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

                        {
                            previews.length > 0  &&

                            previews.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <img src={item.media}  className="object-cover object-center w-full h-64 rounded-lg lg:h-80" />

                                        <div className="mt-8">
                                            <span className="text-blue-500 uppercase">{item.tag}</span>

                                            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                                {item.title}
                                            </h1>

                                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                                {item.highlight}
                                            </p>

                                            <div className="flex items-center justify-between mt-4">
                                                <div>
                                                    <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                                        {item.author}
                                                    </a>

                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                                                </div>

                                                <Link to={item.linkto} className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                        




                        {/*
                        <div>
                            <img src="https://res.cloudinary.com/dn9rcml4g/image/upload/f_auto,q_auto/v1/blog-pics/awakening-promo-1" className="object-cover object-center w-full h-64 rounded-lg lg:h-80" />

                            <div className="mt-8">
                                <span className="text-blue-500 uppercase">Fiction Writing</span>

                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    Get to know my novel: Awakening! </h1>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    A psychological fiction adventure through dream and reality! (With fantasy and horror elements). Inspired by my experiences and the coming of age stories I grew up with.
                                </p>

                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                            Xavier E.
                                        </a>

                                        <p className="text-sm text-gray-500 dark:text-gray-400">December, 2024</p>
                                    </div>

                                    <Link to="writing-blogs/story-overview" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                                </div>

                            </div>
                        </div>




                        <div>
                            <img src="https://res.cloudinary.com/dn9rcml4g/image/upload/f_auto,q_auto/v1/blog-pics/mern1" className="object-cover object-center w-full h-64 rounded-lg lg:h-80" />

                            <div className="mt-8">
                                <span className="text-blue-500 uppercase">Developer Diary</span>

                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    Building the Local History Archive as a MERN app. A step by step restrospective.
                                </h1>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    When stepping into my first IT job while pursuing my undergrad in Software Engineering, I took on one of the most enriching projects that has left much to reflect on and consider for the future.
                                </p>

                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                            Xavier E.
                                        </a>

                                        <p className="text-sm text-gray-500 dark:text-gray-400">December, 2024</p>
                                    </div>

                                    <Link to="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                                </div>
                            </div>
                        </div> */}

                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedBlogPreview;