import { useEffect, useState } from "react"
import { Header, CriaItem } from "../../components/github/header"
import { useFetch } from "../../hooks/useFetch"
import { getFavorites, handleCheckbox, Repository } from './functions'

function GitHub({user} : any){
    const { data: repositories, isFetching } = useFetch<Repository[]>(`https://api.github.com/users/${user}/repos`)
    const [data, setData] = useState(repositories)
    const [favorites, setFavorites] = useState(0)

    useEffect(() => {
        const value = getFavorites(data)
        setFavorites(value != null ? value.length : 0)
    }, [data])

    return (
        <div>
            {isFetching && <p style={{textAlign: 'center'}}>Carregando...</p>}
            <Header user={user} favorites={favorites}/>
            <ul>
                {repositories?.map(repository => {
                    return (
                       <CriaItem 
                            user={user}
                            name={repository.name} 
                            favorite={repository.favorite}
                            description={repository.description}
                            handleCheckbox={
                                () => setData(handleCheckbox(repositories, repository.id) || null)
                            }
                            key={(repository.id).toString()}
                       />
                    )
                })}         
            </ul>
        </div>
    )
}

export default GitHub