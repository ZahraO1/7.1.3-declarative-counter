import React ,{useState} from 'react'

function App(){
  //counter variable is equal to 1 because that is what we passed into useState
  //changeCounter function changes the counter variable
  let [counter, changeCounter] = useState(1)
  //using window. --> changeCounter is now a global variable, makes it declarative
  //when typing chnageCounter(2) on the console, the number on the page also changed
  window.changeCounter = changeCounter
  return(
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  )
}

export default App