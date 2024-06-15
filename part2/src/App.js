import React from 'react'

import courses from './components/courses'
const App = () => {

  // const values = courses.parts.map(part => part.exercises)
  const values = courses.map(course => course.parts.map(part => part.exercises))
  return (
    <div>
      {/* <h1>{course.name}</h1>
      <ul>
        {course.parts.map(part =>
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        )}
      </ul> */}
      {courses.map(course =>
        <div key={course.id}>
          <h1>{course.name}</h1>
          <ul>
            {course.parts.map(part =>
              <li key={part.id}>
                {part.name} {part.exercises}
              </li>
            )}
            {/* <p>total: {course.parts.reduce((accumulator, currentValue.exercises) => accumulator + currentValue.exercises, 0)}</p> */}
          </ul>
          <p>total of {values[course.id - 1].reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</p>
        </div>
      )}
      {/* {console.log(values.map(value => value.reduce((accumulator, currentValue) => accumulator + currentValue, 0)))} */}
      {/* <p>total: {values.map(
        value =>
          value.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
        .map(totalValue => <p>{totalValue}</p>
        )}</p> */}
    </div>
  )
}

export default App;
