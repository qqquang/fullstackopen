import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.partName} {props.exercisesNum}
      </p>
    </div>
  );
}

const Content = (props) => {
  const allParts = props.course.parts.map((part) => {
    return <Part partName={part.name} exercisesNum={part.exercises} />
  })
  return(
    <div>
      {allParts}
    </div>
  );
}

const Total = (props) => {
  let totalExercise = 0;
  props.course.parts.map(value => {return totalExercise += value.exercises})
  return(
    <div>
          <p>Number of exercises {totalExercise}</p>
    </div>
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
        exercises: 14
      }
    ]
  }

  

  return (
    <div>
      <Header course={course} />
      <Content course={course} /> 
      <Total course={course} />
    </div>
  )
}

export default App