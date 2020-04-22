import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
);

const Votes = ({ num }) => <p>{`Votes: ${num}`}</p>;
const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0);

    // Initializes an array of 0s
    const [voteCount, setVoteCount] = useState(Array(anecdotes.length).fill(0));

    const [mostVotes, setMostVotes] = useState(0);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const incrementVotes = () => {
        let copy = [...voteCount];
        copy[selected] += 1;
        setVoteCount(copy);

        if (copy[selected] >= copy[mostVotes]) {
            setMostVotes(selected);
        }
    };

    const selectRandom = () => setSelected(getRndInteger(0, anecdotes.length));

    return (
        <div>
            <h1>Anecdote of the Day</h1>
            <p>{anecdotes[selected]}</p>
            <Votes num={voteCount[selected]}></Votes>
            <Button label="Vote" onClick={incrementVotes}></Button>
            <Button label="Next Anecdote" onClick={selectRandom}></Button>
            <h1>Most Popular Anecdote</h1>
            <p>{anecdotes[mostVotes]}</p>
            <Votes num={voteCount[mostVotes]}></Votes>
        </div>
    );
};

const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
