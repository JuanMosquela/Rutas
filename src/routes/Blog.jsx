import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Blog = () => { 

  const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);    

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))                      
            .catch(e =>  setError('Error de servidor'))
            .finally(() => setLoading(false))

    }, [url])   

    return (data, error, loading)
  }

  const {data, error, loading} = useFetch("https://jsonplaceholder.typicode.com/posts")

 

  if(loading){
    return <h2>Loading...</h2>
  }

  if(error !== ""){
    return <h2>{error}</h2>
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