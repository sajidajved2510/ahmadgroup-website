import BlogsCarousal from "./blogs-carousal"

async function getAboutBlogs() {
    const response = await fetch("https://ap-south-1.cdn.hygraph.com/content/cmioez6wj01mn07wartv13dds/master", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `query AboutBlogs {
            aboutBlogs {
                id
                title
                link
                publishDate
                category
                thumbnail {
                url
                }
            }
            }`,
        }),
    });
    const json = await response.json();
    return json.data.aboutBlogs;
}

const Blogs = async() => {
    const aboutBlogs = await getAboutBlogs();

    return (
        <div className='mb-17.5 lg:mb-22.5 xl:mb-30 selection:bg-[var(--secondary-color)] selection:text-white'>
            <div className='w-full px-3 mx-auto sm:w-[90%] md:w-180 lg:w-[90%] 2xl:max-w-[1320px]'>
                <div className="flex max-lg:flex-col lg:items-center justify-between mb-15 lg:mb-17.5">
                    {/* title */}
                    <div className="w-full lg:w-5/12 flex flex-col mt-6 sm:px-3 max-lg:mb-6">
                        <span className='text-[var(--secondary-color)] w-fit text-sm font-medium leading-[1] uppercase inline-block mb-2.5 relative'>
                            <div className='absolute top-1/2 -translate-y-1/2 -right-10 w-9 h-px bg-[var(--secondary-color)]' />
                            Our Blog & Article</span>
                        <h2 className='leading-[1.1] font-bold text-[calc(1.8rem+1.8vw)]'>Factory Trends & Updates</h2>
                    </div>
                </div>

                {/* blogs wrap */}
                <div className="sm:px-3 w-full max-lg:mt-25">

                    <BlogsCarousal blogs={aboutBlogs}/>
                </div>
            </div>
        </div>
    )
}

export default Blogs