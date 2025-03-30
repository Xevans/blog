

function PersonalMessage() {

    return (
        <>
            
            <div className="p-4 pt-20">
            <figure className="md:flex max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                
                <img src="https://res.cloudinary.com/dn9rcml4g/image/upload/f_auto,q_auto/v1/blog-pics/me3" className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"/>

                <div className="pt-6 md:p-8 text-center md:text-center space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium dark:text-slate-100">
                        “Welcome to my blog! A small corner of the internet where I talk about my personal challenges 
                        and triumphs as a developer and story teller.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                        Xavier Evans
                        </div>
                        <div className="text-slate-700 dark:text-slate-400">
                        Software Engineer, Tinkerer, Writer
                        </div>
                    </figcaption>
                    <a href="https://drive.google.com/file/d/1eRZnncjIhtaPURbU1J_rrEBJIA1aeQqE/view?usp=sharing" target="_blank">
                        <button className="mt-10 transition ease-in-out delay-10 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded">
                            Resume
                        </button>
                    </a>
                </div>
            </figure>
            </div>
        </>
    );
}

export default PersonalMessage;