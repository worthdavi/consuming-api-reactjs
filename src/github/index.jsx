import { useEffect, useState,  } from "react";
import { createApi } from "../api/axios";
import React from 'react';

function Repositories() {
  const [repositories, setRepositories] = useState([])
  const [favorites, setFavorites] = useState(0)

  useEffect(() => {
    const api = createApi('https://api.github.com/')
    api.get('/users/worthdavi/repos')
    .then((response) => setRepositories(response.data))
    .catch((error) => {
      console.error("não conseguiu consultar a api: " + error)
    })    
  }, [])

  useEffect(() => {
    const getFavorites = repositories.filter(rep => rep.favorite)
      setFavorites(getFavorites.length)
      document.title = 'Favoritos: ' + favorites
  }, [favorites])

  function handleFavorite(repId){
    const getFavorites = repositories.filter(rep => {
        if(rep.id === repId){
          return rep.favorite = !rep.favorite
        }else{
          return rep.favorite
        }
      })
    setFavorites(getFavorites.length)
  }

  return (
    <>
      <h1>Repositórios</h1>
      <h3>Favoritados: {favorites}</h3>
      <ul>
        {repositories.map(rep => (
            <li key={rep.id}>
              <strong>{rep.name}</strong> | Favoritar 
              <input type='checkbox' onChange={() => handleFavorite(rep.id)} checked={rep.favorite || false}/>
              <br/>
              {rep.description}
            </li>            
        ))}
      </ul>
    </>
  )
}

export default Repositories;
