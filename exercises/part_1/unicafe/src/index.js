import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ label, handleClick }) => (
    <button onClick={handleClick}>{label}</button>
);

const Statistic = ({ category, number }) => <td>{`${category}: ${number}`}</td>;

const Statistics = ({ catArr, numArr }) => {
    let sum = numArr.reduce((a, b) => a + b);

    if (sum === 0) {
        return <div>No Feedback given.</div>;
    }

    let statistics = [];

    for (let i = 0; i < catArr.length; i++) {
        statistics.push(
            <tr key={i}>
                <Statistic category={catArr[i]} number={numArr[i]} />
            </tr>
        );
    }

    return (
        <div>
            <table>
                <tbody>{statistics}</tbody>
            </table>
        </div>
    );
};

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
            <Statistics
                catArr={["Good", "Neutral", "Bad", "Total", "Average Rating"]}
                numArr={[good, neutral, bad, total, average]}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
