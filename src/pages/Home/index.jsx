import React, {useState} from 'react'
import './styles.css'

import { Card } from '../../components/Card'

export function Home() {
  const [pessoaName,setPessoaName]=useState()
  const [grupo, setGrupo] = useState([])

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

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>  
        <div>
          <strong>
            Yago
          </strong>
          <img src="https://github.com/Intern-Yago.png" alt="" />
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

