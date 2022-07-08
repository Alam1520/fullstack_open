import { useState } from "react"

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const goodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
    setPositive(positive / all);
    averageClick();
    positivePercentage();
  }

  const neutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    setPositive(positive / all);
    averageClick();
    positivePercentage();
  }

  const badClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setPositive(positive / all);
    averageClick();
    positivePercentage();
  }

  const averageClick = () => {
    setAverage((good - bad) / all);
  }

  const positivePercentage = () => {
    setPositive(good / all);
  }

  return (
    <div>
      <h1>Give FeedBack</h1>
      <button onClick={goodClick}>Good</button>
      <button onClick={neutralClick}>Neutral</button>
      <button onClick={badClick}>Bad</button>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
    </div>
  )
}

export default App;
