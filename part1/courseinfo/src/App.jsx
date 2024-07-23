// Header component
const Header = ({ course }) => {
  console.log(course)
  return (
  <>
    <h1>{ course }</h1>
  </>
  )
}

// Part component
const Part = ({ part, exercise }) => {
  console.log(part, exercise)
  return (
  <>
    <p>{part} {exercise}</p>
  </>
  )
  }

// Content component
const Content = ({ parts }) => {
  console.log(parts)
return (
<>
{parts.map((part, index) => (
        <Part key={index} part={part.name} exercise={part.exercises} />
      ))}
</>
)
}

// Total component
const Total = ({parts}) => {
  const exercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  console.log(exercises)
return (
<>
  <p>Number of exercises {exercises}</p>
</>
)
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



return (
<div>
  <Header course={course.name} />
  <Content parts = {course.parts} />
  <Total parts={course.parts} />
</div>
)
}

export default App
