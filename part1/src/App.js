import { useState } from 'react';
import Hello from './Hello';
import Footer from './Footer';
import Button from './Button';
import Complex from './Complex';

const Display = ({ counter }) => <div>{counter}</div>

const App = () => {
  const [counter, setCounter] = useState(0);
  const name = "Alam Husnan";
  const age = 27;

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <div>
        <Display counter={counter} />
      </div>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
      <h1>Greetings from H1</h1>
      <Hello name={name} age={age} />
      <Hello name="Maya" age={28} />
      <br />
      <Complex />
      <br />
      <Footer />
    </>
  )
}

export default App