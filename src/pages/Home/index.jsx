import React, {useState, useEffect} from 'react'
import './styles.css'

import { Card } from '../../components/Card'

export function Home() {
  const [pessoaName,setPessoaName]=useState()
  const [grupo, setGrupo] = useState([])
  const [user, setUser] = useState({user:'', avatar:''})
  const [titulo, setTitulo] = useState('Funcionalidade:')

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
    async function fetchData(){
      const response = await fetch("https://api.github.com/users/Intern-Yago")
      const data = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    }
    fetchData()

    }, [])

  return (
    <div className="container">
      <header>
        <h1>{titulo}</h1>  
        <div>
          {/* <strong>
            Anonimo
          </strong>
          <img src='https://brasilescola.uol.com.br/biologia/flor.htm' alt="Foto de perfil" /> */}
        </div>
      </header>

      <input 
        type="text" 
        placeholder="Digite qual será a funcionalidade do site" 
        onChange={e =>setTitulo(e.target.value)}
        className="muda-texto"
      />

      <input 
        type="text" 
        placeholder="Digite seu nome..." 
        onChange={e =>setPessoaName(e.target.value)}
        className="pessoa"
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

