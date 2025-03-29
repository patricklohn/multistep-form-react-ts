import React, { ReactElement } from 'react'
import {BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill} from 'react-icons/bs'
import "./Thanks.css"

type emojiObject = {
  unsatisfied: ReactElement,
  neutro:ReactElement,
  satisfied:ReactElement, 
  very_satisfied:ReactElement
}

const emojiData: emojiObject ={
  unsatisfied:<BsFillEmojiFrownFill/>, 
  neutro:<BsFillEmojiNeutralFill/>, 
  satisfied:<BsFillEmojiSmileFill/>, 
  very_satisfied:<BsFillEmojiHeartEyesFill/>,
}

type ThanksProps ={ 
  data: {
    name: string,
    review: string, 
    comment: string
  }
}

function Thanks({data}:ThanksProps) {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>A sua opnião foi muito importante. Agradecemos pelo seu Fedback</p>
        <p>Para concluir clique no botão abaixo</p>
        <h3>Aqui está o resumo da sua avaliação {data.name}</h3>
        <p className='review-data'>
          <span>Satisfação do serviço</span>
          {emojiData[data.review as keyof typeof emojiData]}
        </p>
        <p className='review-data'>
          <span>Cometarios:</span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks