import { Link } from "react-router-dom"

function CodeProjectList() {

    return (
        <>

            <title> Dev Projects </title>
            <div className="ml-auto mr-auto pt-24 dark:bg-gray-900 min-h-screen">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl ml-auto mr-auto pb-32">
                    <div className="dark:text-white font-semibold text-3xl">
                        Dev Projects
                    </div>
                    <div></div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-gray-600 hover:bg-gray-400">
                        <Link to="story-overview">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                This Blog
                            </h5>

                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit? 
                            </p>
                        </Link>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Local History Archives (LHA)
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                (Ecommerce) Clothing Store 
                            </h5>

                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit? 
                            </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            VR Wheelchair Rugby: Unreal Engine 5
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            DriveShare: Ride Sharing App
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>

                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            SmartSplit Payment Sharing
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>


                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            BlackJack Game
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>


                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Sudoku Board Generator
                        </h5>

                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi quas ducimus aut repudiandae ab beatae neque tenetur, ut error odit?
                        </p>
                    </div>


                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Game Boy "Emulator"
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

export default CodeProjectList