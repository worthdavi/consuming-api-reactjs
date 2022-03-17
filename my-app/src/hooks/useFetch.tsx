import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(url: string){
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setFetching] = useState(true)
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setData(response.data)
        })
        .finally(() => {
            setFetching(false)
        })
    }, [])
    return { data, isFetching }
}