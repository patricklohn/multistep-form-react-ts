import { useState } from 'react'

// Components
import UserForm from './components/UserForm'
import Thanks from './components/Thanks'
import ReviewForm from './components/ReviewForm'

import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

// Hooks

//Css
import './App.css'

function App() {

  return (
      <div className='app'>
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>Ficamos felizes pela sua compra, utilize o formulário abaixo para avaliar o produto.</p>
        </div>
        <div className="form-contaier">
          <p>Passos</p>
          <form>
            <div className="inputs-container">
              <UserForm/>
            </div>
            <div className="actions">
              <button>
                <GrFormPrevious/>
                <span>Voltar</span>
             </button>
              <button>
                <span>Avançar</span>
                <GrFormNext/>
             </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default App
