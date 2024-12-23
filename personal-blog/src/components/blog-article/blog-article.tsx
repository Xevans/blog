import CloudinaryImageX from "../cloudinary-image/cloudinary-image.component";


function BlogArticle() {

    //start with a boiler plate article and layout.
    // we'll decide how these articles will be fetched later.
    return (
        <>
            <div className=" flex flex-col">

                <div className="flex grid-cols-4 gap-4">

                    <div className="pt-10">
                        <div>
                            <h4 className="text-3xl font-semibold"> The Goal</h4>
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
        </>
    )
}

export default BlogArticle;