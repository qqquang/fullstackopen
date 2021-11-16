import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
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
  return(
    <div>
      <Part partName={props.partName1} exercisesNum={props.exercises1} />
      <Part partName={props.partName2} exercisesNum={props.exercises2} />
      <Part partName={props.partName3} exercisesNum={props.exercises3} />
    </div>
  );
}

const Total = (props) => {
  return(
    <div>
          <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  

  return (
    <div>
      <Header course={course} />
      <Content 
        partName1={part1.name} partName2={part2.name} partName3={part3.name} 
        exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}
      /> 
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App