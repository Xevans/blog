//import { Link } from "react-router-dom";
import CloudinaryImageX from "../cloudinary-image/cloudinary-image.component";

function BlogPreview() {


    return (
        <>
            <section className="bg-white dark:bg-slate-900 px-6 py-10 mx-auto ">
                <div className="container px-6 py-10 mx-auto">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Featured Blogs</h1>
                    </div>

                    <hr className="my-8 border-gray-200 dark:border-gray-700" />





                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <CloudinaryImageX name="dev-image-1" width={1470} height={1470} definitions="object-cover object-center w-full h-64 rounded-lg lg:h-80" />

                            <div className="mt-8">
                                <span className="text-blue-500 uppercase">Software Development</span>

                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    How I'm tackling my life-long mission of using data to help people feel inspired and empowered.
                                </h1>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    My most recent project I designed with researchers in mind to discover history from the Grosse Pointe and Detroit community over the last 100+ years.
                                </p>

                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                            Xavier E.
                                        </a>

                                        <p className="text-sm text-gray-500 dark:text-gray-400">December, 2024</p>
                                    </div>

                                    <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                                </div>

                            </div>
                        </div>





                        <div>
                            <CloudinaryImageX name="awakening-promo-1" width={765} height={526} definitions="object-cover object-center w-full h-64 rounded-lg lg:h-80" />

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

                                    <a href="writing-projects/story-overview" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                                </div>

                            </div>
                        </div>




                        <div>
                            <CloudinaryImageX name="mern1" width={765} height={526} definitions="object-cover object-center w-full h-64 rounded-lg lg:h-80" />

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

                                    <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPreview;