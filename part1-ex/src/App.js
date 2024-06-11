
const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}
const Content = (props) => {
  return (
    <>
      <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
      <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
      <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
    </>
  )
}
const Total = (props) => {
  return (
    <p>Number of total exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
        exercises: 16
      }
    ]
  }



  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
    // <>
    //   <Part1 name={parts[0].name} exercises={parts[0].exercises} />
    //   <Part2 name={parts[1].name} exercises={parts[1].exercises} />
    //   <Part3 name={parts[2].name} exercises={parts[2].exercises} />
    // </>
  )
}

export default App