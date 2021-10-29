import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const age = 10;
  const name = 'Quang';
  return (
    <div>
      <p>Hello</p>
      <Hello name={name} test="temp" age={age + 15}/>
      <Hello name="Emily" age={age + 11}/>
    </div>
  )
}

export default App;
