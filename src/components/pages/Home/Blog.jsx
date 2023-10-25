import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const [blogData, setBlogData] = useState([])
    useEffect(()=>{
        fetch('brands.js')
        .then(res => res.json())
        .then(data => setBlogData(data))
    },[])
    return (
        <div className="my-20">
            <h2 className="text-3xl font-bold text-center text-orange-500 mb-14">Latest Blog Posts</h2>
            <Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    blogData.map(blog => <p key={blog.id}>
                        <div className="card bg-base-100 h-[340px] p-1 shadow-xl">
                            <figure><img className="w-11/12 h-40" src={blog.blog_img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-lg font-semibold mb-2">{blog.blog_title}</h2> <hr />
                                <p className="">{blog.blog_date}</p>
                            </div>
                        </div>
                    </p>)
                }
            </div>
            </Link>
        </div>
    );
};

export default Blog;