import React, {useState} from 'react'
import './styles.css'

import { Card } from '../../components/Card'

export function Home() {
  const [Name,setName]=useState()

  return (
    <div className="container">
      <h1>Lista de presença</h1>  
      <h2>Nome: {Name}</h2>
      <input 
        type="text" 
        placeholder="Digite seu nome..." 
        onChange={e =>setName(e.target.value)}
      />
      <button type="button">Adicionar</button>
      <Card name="Yago Victor" time="10:55:25"/>
      <Card name="João" time="11:00:10"/>
    </div>
  )
}

