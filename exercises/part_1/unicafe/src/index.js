import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ label, handleClick }) => (
    <button onClick={handleClick}>{label}</button>
);

const Statistic = ({ category, number }) => <p>{category + ": " + number}</p>;

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const total = good + bad + neutral;
    const average = total === 0 ? 0 : (good - bad) / total;

    const incrementGood = () => setGood(good + 1);
    const incrementBad = () => setBad(bad + 1);
    const incrementNeutral = () => setNeutral(neutral + 1);

    return (
        <div>
            <Header text="Give Feedback" />
            <Button label="good" handleClick={incrementGood} />
            <Button label="neutral" handleClick={incrementNeutral} />
            <Button label="bad" handleClick={incrementBad} />
            <Header text="Statistics" />
            <Statistic category="Good" number={good} />
            <Statistic category="Neutral" number={neutral} />
            <Statistic category="Bad" number={bad} />
            <Statistic category="Total" number={total} />
            <Statistic category="Average Rating" number={average} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
