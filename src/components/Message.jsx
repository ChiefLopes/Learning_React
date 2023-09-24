import React from 'react'
import { useState } from 'react'

const Message = (props) => {
    const [word, setWord] = useState("meet")
    
    const handleClick = () => {
      setWord("Eat")
    }
    
  return (
    <div>
      {`Let's ${word} at 2:45pm`}
      <button onClick={handleClick}>Change Word</button>
    </div>
  );
}

export default Message