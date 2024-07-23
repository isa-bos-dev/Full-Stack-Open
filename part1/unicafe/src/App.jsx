import { useState } from 'react'

// Componente App
const Statistics = ({props}) => {
  // Si no hay feedback, muestra un mensaje indicando que no se ha dado feedback
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  // Si hay feedback, muestra las estadísticas
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tr><td>good</td><td>{props.good}</td></tr>
        <tr><td>neutral</td><td>{props.neutral}</td></tr>
        <tr><td>bad</td><td>{props.bad}</td></tr>
        <tr><td>all</td><td>{props.good + props.neutral + props.bad}</td></tr>
        <tr><td>average</td><td>{(props.good - props.bad) / (props.good + props.neutral + props.bad)}</td></tr>
        <tr><td>positive</td><td>{props.good / (props.good + props.neutral + props.bad) * 100} %</td></tr>
      </table>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h1>give feedback</h1>
    {/* Tres botones, cada uno con un onClick que incrementa el estado correspondiente (good, neutral o bad) */}
    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>

    {/* Muestra el estado de cada variable */}
    <Statistics props={{good, neutral, bad}} />
  </div>
  )
}

export default App