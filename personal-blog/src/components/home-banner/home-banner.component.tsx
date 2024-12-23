

function HomeBanner() {

    return (
        <>
        <div className="relative text-center">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl pt-8 px-8 pb-8 mx-auto mt-8">
                <img src="https://res.cloudinary.com/dn9rcml4g/image/upload/f_auto,q_auto:low/v1/blog-pics/mountains" className="w-full h-full rounded-lg" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="w-full absolute top-0 left-0 text-center mt-10">
                    <div className="max-w-2xl bg-slate-600 bg-opacity-85 p-10 rounded-lg ml-auto mr-auto mt-60">
                        <h2 className="text-3xl font-semibold text-white text-center">
                            My Name is Xavier. Welcome to My Blog!
                        </h2>
                        <button className="mt-10 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded">
                            Resume
                        </button>
                    </div>
                </div>
            </article>
            
        </div>
        
        </>
    )
}

export default HomeBanner;