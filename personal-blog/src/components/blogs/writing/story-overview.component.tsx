//import CloudinaryImageX from "../../cloudinary-image/cloudinary-image.component";


function StoryOverview() {

    return (
        <>
            <title> Awakening: Story Overview </title>
            <div className="items-center justify-center dark:text-slate-100 max-w-5xl ml-auto mr-auto min-h-screen">

                <div className="flex grid-cols-4 gap-4">
                    <div className="flex flex-col">
                        <div className="dark:bg-slate-700 p-14 mt-8 rounded-md">
                            <h4 className="text-xl">Writing Projects / Awakening Novel</h4>
                            <h2 className="text-3xl font-semibold">Awakening: Story Overview</h2>

                            <p className="pt-4 max-w-lg">By Xavier Evans | January 6, 2025</p>
                        </div>

                        <div>
                            <div className="flex flex-col">
                                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 mx-auto mt-8">
                                    <img src="https://res.cloudinary.com/dn9rcml4g/image/upload/f_auto,q_auto/v1/blog-pics/dream-gate" className="w-full h-full rounded-lg" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">The Dream Gate</h3>
                                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Art by @Kaiserlaser</div>
                                </article>
                                <div className="lg:ml-20 flex max-w-3xl pb-10">
                                    <div className="pt-10">
                                        <div>
                                            <h4 className="text-3xl font-semibold"> What is Awakening?</h4>
                                        </div>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos repellat ipsam facere eius natus nulla! Laboriosam quae alias tenetur, a velit excepturi itaque libero nisi nam recusandae, veniam dicta cupiditate?</p>
                                        <br />
                                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit itaque dignissimos nesciunt minima voluptas, ipsa ratione aliquam saepe repudiandae dolorem doloremque quibusdam eos commodi, vero in laborum suscipit ad.</p>
                                        <br />
                                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit itaque dignissimos nesciunt minima voluptas, ipsa ratione aliquam saepe repudiandae dolorem doloremque quibusdam eos commodi, vero in laborum suscipit ad.</p>  
                                    </div>

                                    
                                </div>

                                <div className="lg:ml-20 mb-28">
                                    <h4 className="font-bold text-2xl">Thanks for reading!</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default StoryOverview;