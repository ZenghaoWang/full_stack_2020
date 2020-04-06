import React from "react";
import ReactDOM from "react-dom";

/*
A component
*/
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      Greeting app created by{" "}
      <a href="https://github.com/ZenghaoWang">Zenghao Wang</a>
    </div>
  );
};

// Defines a react component
// The => notation defines a function with no parameters
// App is a constant variable assigned by the function
// We use Hello, a component we defined above
const App = () => {
  const name = "Peter";
  const age = 10;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10}></Hello>
      <Hello name={name} age={age}></Hello>
      <Footer></Footer>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
