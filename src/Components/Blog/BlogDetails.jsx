import { useParams } from "react-router";
import useFetch from "./useFetch";
import '../Blog/Blog.css'

const BlogDetails = () => {
    const {id} = useParams()
    const {data, error, isLoading} = useFetch("http://localhost:8000/blogs/" + id)
    console.log(data)

    return ( 
        <div className="blog-page">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && (<div className="blog-details">
                <div className="blog-details-img">
                    <img src={data.img} alt="" />
                </div>
                <div className="blog-details-description">
                    <h1>{data.name}</h1>
                    <p >{data.title}</p>
                </div>
                </div>)}
        </div>
     )
}
 
export default BlogDetails;