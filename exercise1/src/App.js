import { useState } from "react";

const StatisticLine = (props) => {
  if (props.symbol) {
    return (
      <p>
        {props.text} {props.value} {props.symbol}
      </p>
    )
  }
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.all} />
      <StatisticLine text='average' value={props.average} />
      <StatisticLine text='positive' value={props.positive} symbol='%' />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

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
      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutralClick} text='neutral' />
      <Button handleClick={badClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App;
