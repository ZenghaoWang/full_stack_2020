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

const Footer = () => {
    return (
        <div>
            Greeting app created by{" "}
            <a href="https://github.com/ZenghaoWang">Zenghao Wang</a>
        </div>
    );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const History = ({ allCLicks }) => {
    if (allCLicks.length === 0) {
        return <div>The app is used by pressing the buttons.</div>;
    } else return <div>Button press history: {allCLicks.join(" ")}</div>;
};

// Defines a react component
// The => notation defines a function with no parameters
// App is a constant variable assigned by the function
// We use Hello, a component we defined above
const App = () => {
    const name = "Peter";
    const age = 10;

    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allCLicks, setAll] = useState([]);

    const handleLeftClick = () => {
        setAll(allCLicks.concat("L"));
        setLeft(left + 1);
    };

    const handleRightClick = () => {
        setAll(allCLicks.concat("R"));
        setRight(right + 1);
    };

    // setTimeout(() => setCounter(counter + 1), 1000);
    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10}></Hello>
            <Hello name={name} age={age}></Hello>
            {left}
            <Button onClick={handleLeftClick} text="left" />
            <Button onClick={handleRightClick} text="right" />
            {right}
            <History allCLicks={allCLicks}></History>
            <Footer></Footer>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
