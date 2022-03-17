export type Repository = {
    id: number
    name: string
    description: string
    favorite: boolean
}

export function handleCheckbox(repositories : Repository[] | null, repoId : number){
    const answer = repositories?.map(repo => {
        if(repo.id === repoId){
            repo.favorite = !repo.favorite
        }
        return repo
    })
    return answer
}

export function getFavorites(repositories : Repository[] | null){
    const answer = repositories?.filter(repo => {
        if(repo.favorite){
            return repo
        }
    })
    return answer
}