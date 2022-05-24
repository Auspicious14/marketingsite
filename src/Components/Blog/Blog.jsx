import { Link } from 'react-router-dom'
import '../Blog/Blog.css'
import useFetch from './useFetch'

const BlogPage = () => {
    const {data, error, isLoading}= useFetch("http://localhost:8000/blogs")
    console.log(data)

    return (
        <div className="blog-page">
           {error && <div>{error}</div>}
           {isLoading && <div>Loading...</div>}
           {data && data.map(item => (
                <div className="blog-hero" key={item.id}>
                <div className="blog-hero-left-img" >
                    <img src={item.img} alt="" />
                </div>
                <div className="blog-hero-right">
                    <h2>{item.name}</h2>
                    {item.title &&<p>{item.title.substr(0, 200)}...</p>}
                    <Link to={`/blogDetails/${item.id}`}>Read More</Link>
                </div>
            </div>
           ))}
        </div>
     );
}
 
export default BlogPage;