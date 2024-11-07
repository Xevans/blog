

function PersonalMessage() {

    return (
        <>
            <div className="p-4">
            <figure className="md:flex max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover" src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxsYWR5fGVufDB8MHx8fDE2OTQxNzI4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium dark:text-slate-100">
                    “Welcome to my blog where I like to share my latest programming projects, 
                    novel progress, and go on dorky tangents about video gaming.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                    Xavier Evans
                    </div>
                    <div className="text-slate-700 dark:text-slate-400">
                    Software Engineer
                    </div>
                </figcaption>
                </div>
            </figure>
            </div>
        </>
    )
}

export default PersonalMessage;