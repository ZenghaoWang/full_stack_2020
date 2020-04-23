import React from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => {
    return (
        <div>
            <Header header={course.name}></Header>
            <Content partArr={course.parts}></Content>
        </div>
    );
};

const Header = ({ header }) => <h1>{header}</h1>;

const Content = ({ partArr }) => {
    return (
        <div>
            {partArr.map((part) => (
                <Part part={part.name} numExercises={part.exercises}></Part>
            ))}
        </div>
    );
};

const Part = ({ part, numExercises }) => <p>{`${part} ${numExercises}`}</p>;

const App = () => {
    const course = {
        id: 1,
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of Reactddd",
                exercises: 10,
                id: 1,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3,
            },
        ],
    };

    return (
        <div>
            <Course course={course} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
