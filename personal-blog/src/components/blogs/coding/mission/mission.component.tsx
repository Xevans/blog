import CloudinaryImageX from "../../../cloudinary-image/cloudinary-image.component";

// Long term goals as a software developer, areas of interests, projects I want to return to or start
function Mission() {

    return (
        <>
            <title> Creating This Blog </title>
            <div className="items-center justify-center dark:text-slate-100 max-w-5xl ml-auto mr-auto min-h-screen">

                <div className="flex grid-cols-4 gap-4">
                    <div className="flex flex-col">
                        <div className="dark:bg-slate-700 p-16 mt-8 rounded-md">
                            <h4 className="text-xl">Projects / Coding</h4>
                            <h2 className="text-3xl">Creating This Blog</h2>

                            <p className="pt-8">Covering the reason behind creating this blog, technologies used, some challenges, rant, my spritual Typescript conversion and a kickoff message to commemorat the first entry!</p>
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
                                            
                                            <h4 className="text-4xl font-semibold pb-5"> Overview </h4>
                                            
                                            <p> I built this blog to <b>challenge myself to build a website using Typescript. </b> 
                                                In my last project I worked strictly with untyped javascript which invited a lot of headaches down the road. 
                                                Now I can look at a module I wrote an know exactly what data it's operating on. 
                                                <br /><br />To put it short, revisiting my old projects makes me want to stop time and ascend them to Typescript, haha.
                                            </p>
                                            <br />

                                            <h5 className="text-3xl font-semibold pb-5"> My Personal Blog &#128187;</h5>
                                            <p> For the most part, this blog exists solely for me to talk about my interests in detail. 
                                                It could be anything and I am still planning out different categories like a general discussion, and gaming. 
                                                <br /><br />For now, I am focusing on topics closer to my career as I am in a pivotal point and wish to show prospective employers and even fellow devs my own challenges and how I overcame them. 
                                                <br /><br />I also share unprofessional opinions, but that just comes with the territory. 
                                                I will also be featuring my writing as I am a proud novelist and hope to share more to the world about it!
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
                                        <h5 className="text-3xl font-semibold pb-5"> Tech Stack (Incoming story + transformative experience) </h5>
                                        
                                        <p>
                                            React (Vite) + Typescript + TailwindCSS
                                        </p>
                                        <br />
                                        
                                        <p>
                                        There was no scientific analysis that went into this stack, so I'll give a story instead. 
                                        Early last year, I dived into react and built something as homework from a course. 
                                        I already had some experience developing and working with backend technologies like .NET, Express, and Django for several projects. 
                                        </p>
                                        <br />

                                        <p>
                                        In my last project I decided to go full stack because a database needed to be utilized by the front-end, which can be done without a backend (<a className="transition duration-500 font-semibold text-blue-300 hover:text-blue-400 hover:underline" href="https://github.com/Xevans/crown-clothing" target="_blank">see my crown clothing project using firebase</a>). 
                                        <br /><br />That site needed to have thousands of records preprocessed when rendering them to the browser, so creating a backend server with API endpoints to handle these niche requests seemed like the best course of action, and sure enough, it kept my front end logic nice and tidey. 
                                        </p>
                                        <br />

                                        <p>
                                        Now the blog, I wanted to work with typescript sooner rather than later, and tailwind was also something I wanted to explore and oh boy am I never going back. 
                                        The mild learning curve was worth it. 
                                        <br /><br />I am no stranger to strict languages, as someone with a heavy C++ background, but something Typescript has over C++ (besides being easier to dive into) is having a helpful parser. 
                                        </p>
                                        <br />

                                        <p>
                                        Typescript feels like a coach calling out your bad habits in your ear while you work. 
                                        It took me a few hours to write a simple context and frankly, typing my objects and data showed me how little I understood what some of my hooks were actually doing.
                                        </p>
                                        <br />
                                    </div>

                                    <div className="p-10 max-w-lg max-h-lg mx-auto">
                                        <img src="https://res.cloudinary.com/dn9rcml4g/image/upload/v1739318928/blog-pics/cat-computer-gif.gif" />
                                    </div>

                                    <div>
                                        <h5 className="text-3xl font-semibold pb-5"> Future Considerations </h5>
                                        <p>
                                            I want to migrate this project into a Nextjs project. 
                                            This project is a blog for the most part. 
                                            There isn't much need to limit it to a SPA when it's not really operating like an app (although I tried to make it feel like one). 
                                            Sure there might not be crazy performance advantages in this stage, but...
                                            <br/> 
                                            <br/><b>1.)</b> It's an excuse to learn static rendering. 
                                            <br/><b>2.)</b> Static rendering would be useful for blog content which will have low client-side interactivity. 
                                            <br/><b>3.)</b> I just like learning about things as I implement them. 
                                        </p>
                                        <br />
                                        <p>
                                            Next, I want to add demonstrations to the website in the future. 
                                            I already cooked up an idea for an interactive chiptune player that plays different tunes according to keyboard presses. 
                                            From there I could make a mini tracker that users can play with. More to come.
                                        </p>
                                        <br />
                                    </div>


                                    <div>
                                    <h5 className="text-2xl font-semibold pb-5"> Afterword: Blog Kickoff &#127881;</h5>
                                        <p>
                                            I have a firm belief that anything can be learned if you are willing. Sounds pretty lofty, right? Realistically, the world is full of
                                            not only barriers to information, but discouragement as well. There is this stigma that engineers are math-wizards that use black magic to
                                            create the next big thing. 
                                        </p>
                                        <br />
                                        <p>
                                            While there are a lot of talented people I have had the pleasure of meeting and working with, truth is, most 
                                            engineers are pretty human. They get confused, they get lost in the details, they research questions, just like you and me.
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