import React, {useState, useEffect} from 'react'
import './styles.css'

import { Card } from '../../components/Card'

export function Home() {
  const [pessoaName,setPessoaName]=useState()
  const [grupo, setGrupo] = useState([])
  const [user, setUser] = useState({user:'', avatar:''})

  function handleAddPessoa(){
    const newPessoa={
      name: pessoaName,
      date: new Date().toLocaleString("pt-br", {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute:"2-digit",
        second:'2-digit'
      })
    }
    setGrupo(prevState => [...prevState, newPessoa])
  }

  useEffect(()=>{
    fetch("https://api.github.com/users/Intern-Yago")
    .then(response => response.json())
    .then(data =>{
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  },[])

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>  
        <div>
          <strong>
            {user.name}
          </strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input 
        type="text" 
        placeholder="Digite seu nome..." 
        onChange={e =>setPessoaName(e.target.value)}
      />
      <button type="button" onClick={handleAddPessoa}>
        Adicionar
      </button>
      {
        grupo.map(pessoa => (
            <Card 
              key={pessoa.date}
              name={pessoa.name} 
              date={pessoa.date}
            />
          )
        )
      }
    </div>
  )
}

