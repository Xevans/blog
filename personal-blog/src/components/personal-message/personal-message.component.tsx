import CloudinaryImageX from "../cloudinary-image/cloudinary-image.component";

function PersonalMessage() {

    return (
        <>
            
            <div className="p-4 pt-20">
            <figure className="md:flex max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                
                <CloudinaryImageX name="me2" width={384} height={512} definitions="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"/>

                <div className="pt-6 md:p-8 text-center md:text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-medium dark:text-slate-100">
                    “Welcome to my blog where I share my software projects, 
                    fiction novel process, and go on dorky tangents about video games.”
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
    );
}

export default PersonalMessage;