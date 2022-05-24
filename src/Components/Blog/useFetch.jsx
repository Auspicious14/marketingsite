import {useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(res.status !== 200) {
                    throw Error(`This is a ${res.status} error`)
                }
                return res.json()
            })
            .then(data => {
                setIsLoading(false)
                setData(data)
                setError(null)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
        }, [url])

    return {data, error, isLoading}
}
export default useFetch;