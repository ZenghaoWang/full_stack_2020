import React, { useState } from "react";
import ReactDOM from "react-dom";

/*
A component using destructured props variables
*/
const Hello = ({ name, age }) => {
    // Nested function
    const bornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old.
            </p>
            <p>That means you were probably born in {bornYear()}.</p>
        </div>
    );
};

const Display = ({ counter }) => <div>This is a counter. {counter}</div>;

const Button = ({ handleCLick, text }) => {
    return <button onClick={handleCLick}>{text}</button>;
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

    const [counter, setCounter] = useState(0);
    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);

    // setTimeout(() => setCounter(counter + 1), 1000);
    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10}></Hello>
            <Hello name={name} age={age}></Hello>
            <Display counter={counter}></Display>
            <Button handleCLick={increaseByOne} text="Plus" />
            <Button handleCLick={setToZero} text="Zero" />
            <Button handleCLick={decreaseByOne} text="Minus" />
            <Footer></Footer>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
