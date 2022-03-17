import { Item, Title, SubTitle } from '../../pages/github/styles'

type HeaderProps = {
    user: string
    favorites: number
}

export function Header({user, favorites} : HeaderProps){
    return (
        <>
            <Title>Consumindo a API do GitHub com React e TypeScript</Title>
            <SubTitle>
                Usuário: {user} <br/>
                Repositórios favoritados: {favorites}
            </SubTitle>
        </>
    )
}

type ItemProps = {
    id: number
    name: string
    description: string
    favorite: boolean
    handleCheckbox : any
    user: string
}

export function CriaItem({id, name, favorite, description, handleCheckbox, user} : ItemProps){
    return (
        <>
            <Item key={id}>
                <a target="_blank" href={`https://github.com/${user}/${name}`}>{name}</a><span>
                {favorite ? 'Favoritado' : 'Favoritar'} <input type="checkbox" onChange={handleCheckbox} checked={favorite}/></span>
                <p>{description}</p>
            </Item>
        </>
    )
}



