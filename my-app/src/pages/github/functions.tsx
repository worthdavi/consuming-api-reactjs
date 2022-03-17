export type Repository = {
    id: number
    name: string
    description: string
    favorite: boolean
}

export function handleCheckbox(repositories : Repository[] | null, repoId : number){
    const answer = repositories?.map(repository => {
        if(repository.id === repoId)
            repository.favorite = !repository.favorite
        return repository
    })
    return answer
}

export function getFavorites(repositories : Repository[] | null){
    const answer = repositories?.filter(repository => {
        if(repository.favorite)
            return repository
    })
    return answer
}