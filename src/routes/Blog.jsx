import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Blog = () => { 
    
  const [data, setData] = useState([]);
    
  const [loading, setLoading] = useState(false);    

  useEffect(() => {
    setLoading(true)
    fetchData()

  }, [])  

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json()
      setData(data)
      
    } catch {
      console.log('error')
      
    }
  }  

  return (
    <div>
            <h1>Blog</h1>
            {data.map((item) => (
                <h4 key={item.id}>
                    <Link to={`/blog/${item.id}`}>
                        {item.id} - {item.title}
                    </Link>
                </h4>
            ))}
        </div>
  )
}

export default Blog