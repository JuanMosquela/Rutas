import { Link } from "react-router-dom"
import { UseFetch } from "../hooks/UseFetch"

const Blog = () => {

  const {data, error} = UseFetch("https://jsonplaceholder.typicode.com/posts")

  if(error !== ""){
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h1>Blog</h1>      
      {data.map((item) => (
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
          </h4>
      ))}      
    </div>
  )
}
export default Blog