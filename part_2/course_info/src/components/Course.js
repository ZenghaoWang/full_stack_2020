import React from "react";

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

export default Course;
