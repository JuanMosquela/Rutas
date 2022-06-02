import { useEffect, useState } from "react";

export const UseFetch = (url) => {
    
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            
            .catch(error =>  setError('Error de servidor'))
            .finally(() => console.log('termino'))

    },[url])

    return (data, error)
}