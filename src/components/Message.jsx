import React from 'react'
import { useState } from 'react'

const Message = (props) => {
    const [word, setWord] = useState("meet");
    
    
    const changeWord = () => {
      setWord()
    }
    
  return (
    <div>
      {`Let's ${word} at 2:45pm`}
          <button onClick={changeWord}>Change Word</button>
    </div>
  );
}

export default Message