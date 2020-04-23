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
    const total = partArr.reduce((a, b) => a + b.exercises, 0);

    return (
        <div>
            {partArr.map((part) => (
                <Part part={part.name} numExercises={part.exercises}></Part>
            ))}
            <Total total={total}></Total>
        </div>
    );
};

const Part = ({ part, numExercises }) => <p>{`${part} ${numExercises}`}</p>;

const Total = ({ total }) => (
    <p>
        <b>{`Total Number of Exercises: ${total}`}</b>
    </p>
);

const App = () => {
    const courses = [
        {
            id: 1,
            name: "Half Stack application development",
            parts: [
                {
                    name: "Fundamentals of React",
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
        },

        {
            name: "Node.js",
            id: 2,
            parts: [
                {
                    name: "Routing",
                    exercises: 3,
                    id: 1,
                },
                {
                    name: "Middlewares",
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ];

    return (
        <div>
            {courses.map((course) => (
                <Course course={course} />
            ))}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
