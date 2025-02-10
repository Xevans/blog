import CloudinaryImageX from "../../../cloudinary-image/cloudinary-image.component";

// Long term goals as a software developer, areas of interests, projects I want to return to or start
function Mission() {

    return (
        <>
            <title> Creating This Blog </title>
            <div className="items-center justify-center dark:text-slate-100 max-w-5xl ml-auto mr-auto">

                <div className="flex grid-cols-4 gap-4">
                    <div className="flex flex-col">
                        <div className="dark:bg-slate-700 p-16 mt-8 rounded-md">
                            <h4 className="text-xl">Projects / Coding</h4>
                            <h2 className="text-3xl">Developer Journey</h2>

                            <p className="pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus, enim ipsam earum doloribus in exercitationem laboriosam deserunt, cupiditate ullam illum vitae repellat optio eos dicta quo distinctio non accusamus.</p>
                        </div>

                        <div>
                            <div className="flex flex-col">

                                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 mx-auto mt-8">
                                    <img src="https://res.cloudinary.com/dn9rcml4g/image/upload/c_crop,h_600,w_800/blog-pics/pc-screen-motivation" className="w-full h-full rounded-lg" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Reminder to Never Give Up!</h3>
                                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">cottonbro studio | Pexels.com</div>
                                </article>

                                <div className="lg:ml-20 max-w-4xl text-lg pb-10">
                                    <div className="">
                                        <div className="pt-10">
                                            <div>
                                                <h4 className="text-3xl font-semibold"> About Me </h4>
                                            </div>
                                            <p>About me? Yeah you read that right! Normally, an about me would be its own topic, but I would rather
                                                define myself for each passion I carry. As a Software Engineer, I am a life-long learner and a creative problem solver.
                                                I'm attracted to unique problems and will do all that I can to learn about unfamiliar concepts.
                                            </p>
                                            <br />
                                            <p> When a question comes up, I generally don't entertain the phrase 'who knows'. It's perfectly fine to not know something, afterall.
                                                Unfortunately, its a favorite default I hear often. This is where I would typically say, so let's find out! So why am I bringing this up?
                                            </p>  
                                            <br />
                                            
                                            <p>

                                            </p>
                                        </div>

                                        
                                    </div>

                                    <div className="p-10 max-w-lg max-h-lg mx-auto">
                                        <CloudinaryImageX name="dev-image-1" width={1470} height={1470} definitions="object-cover object-center w-full h-full rounded-lg " />
                                    </div>

                                    <div>
                                        <p>
                                            I have a firm believe that anything can be learned if you are willing. Sounds pretty lofty, right? Realistically, the world is full of
                                            not only barriers to information, but discouragement as well. There is this stigma that engineers are math-wizards that use black magic to
                                            create the next big thing. 
                                        </p>
                                        <br />
                                        <p>
                                            While there are a lot of talented people I have had the pleasure of meeting and working with, truth is, most 
                                            engineers are pretty human. They get confused, they get lost in the details, they google questions, just like you and me.
                                        </p>
                                        <br />
                                    </div>

                                    <div>
                                        <p>
                                            I have a firm believe that anything can be learned if you are willing. Sounds pretty lofty, right? Realistically, the world is full of
                                            not only barriers to information, but discouragement as well. There is this stigma that engineers are math-wizards that use black magic to
                                            create the next big thing. 
                                        </p>
                                        <br />
                                        <p>
                                            While there are a lot of talented people I have had the pleasure of meeting and working with, truth is, most 
                                            engineers are pretty human. They get confused, they get lost in the details, they google questions, just like you and me.
                                        </p>
                                        <br />
                                    </div>


                                    <div>
                                        <p>
                                            I have a firm believe that anything can be learned if you are willing. Sounds pretty lofty, right? Realistically, the world is full of
                                            not only barriers to information, but discouragement as well. There is this stigma that engineers are math-wizards that use black magic to
                                            create the next big thing. 
                                        </p>
                                        <br />
                                        <p>
                                            While there are a lot of talented people I have had the pleasure of meeting and working with, truth is, most 
                                            engineers are pretty human. They get confused, they get lost in the details, they google questions, just like you and me.
                                        </p>
                                        <br />
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

export default Mission;