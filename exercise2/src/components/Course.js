import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total'

const Course = ({ course }) => {
    return (
        course.map(single => {
            return (
                <div key={single.id}>
                    <Header course={single.name} />
                    <Content content={single.parts} />
                    <Total total={single.parts} />
                </div>
            )
        })
    )
}

export default Course;