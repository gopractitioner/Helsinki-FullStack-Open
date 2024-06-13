import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>



const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
//)
const Button = (props) => {
  console.log('props value is' + props)
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [value, setValue] = useState(10)
  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  const setToValue = (newValue) => () => {
    console.log('value is set to ' + newValue)
    setValue(newValue)
  }
  return (
    <div>
      {/* {left}
      <Button handleClick={setToValue(1000)} text='left' />
      <Button handleClick={setToValue(10)} text='right' />
      {right}
      <History allClicks={setToValue(value + 1)} /> */}
      <button onClick={setToValue(1000)}>thousand</button>'
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
      <button onClick={setToValue(100)}>hundred</button>
    </div>
  )
}
export default App