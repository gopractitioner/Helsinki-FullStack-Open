
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return (
    <>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </>
  )
}
const Total = (props) => {
  return (
    <p>Number of total exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}
const Part1 = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}
const Part2 = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}
const Part3 = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]



  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
    // <>
    //   <Part1 name={parts[0].name} exercises={parts[0].exercises} />
    //   <Part2 name={parts[1].name} exercises={parts[1].exercises} />
    //   <Part3 name={parts[2].name} exercises={parts[2].exercises} />
    // </>
  )
}

export default App