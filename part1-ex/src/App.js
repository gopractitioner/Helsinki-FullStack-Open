import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}
const Statistic = (props) => {
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.total} />
      <StatisticLine text="average" value={(props.good - props.bad) / props.total} />
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }
  return (
    <div>
      {/* <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button> */}
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      {/* <Statistics good={good} neutral={neutral} bad={bad} total={total} /> */}
      <Statistic good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}
export default App