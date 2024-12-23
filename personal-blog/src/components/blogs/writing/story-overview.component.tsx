import CloudinaryImageX from "../../cloudinary-image/cloudinary-image.component";


function StoryOverview() {

    return (
        <>
            <div className="items-center justify-center dark:text-slate-100 max-w-5xl ml-auto mr-auto">

                <div className="flex grid-cols-4 gap-4">
                    <div className="flex flex-col">
                        <div className="dark:bg-slate-700 p-16 mt-8 rounded-md">
                            <h4 className="text-xl">Writing Projects / Awakening Novel</h4>
                            <h2 className="text-3xl">Overview</h2>

                            <p className="pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus, enim ipsam earum doloribus in exercitationem laboriosam deserunt, cupiditate ullam illum vitae repellat optio eos dicta quo distinctio non accusamus.</p>
                        </div>

                        <div>
                            <div className="flex flex-col">
                                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 mx-auto mt-8">
                                    <img src="https://res.cloudinary.com/dn9rcml4g/image/upload/f_auto,q_auto/v1/blog-pics/dream-gate" className="w-full h-full rounded-lg" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">The Dream Gate</h3>
                                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Art by @Kaiserlaser</div>
                                </article>
                                <div className="flex grid-cols-4 gap-4">
                                    <div className="pt-10">
                                        <div>
                                            <h4 className="text-3xl font-semibold"> What is Awakening?</h4>
                                        </div>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos repellat ipsam facere eius natus nulla! Laboriosam quae alias tenetur, a velit excepturi itaque libero nisi nam recusandae, veniam dicta cupiditate?</p>
                                        <br />
                                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit itaque dignissimos nesciunt minima voluptas, ipsa ratione aliquam saepe repudiandae dolorem doloremque quibusdam eos commodi, vero in laborum suscipit ad.</p>  
                                    </div>

                                    <div className="p-10 max-w-lg max-h-lg">
                                        <CloudinaryImageX name="dev-image-1" width={1470} height={1470} definitions="object-cover object-center w-full h-full rounded-lg " />
                                    </div>
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