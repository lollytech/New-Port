import React, {useState} from 'react';
import "./App.css"
const App = () => {
  const [myDisplay, setMyDisplay] = useState('');
  const [myExpression, setMyExpression] = useState('');
  const handleEvent = (value) => {
    if (value === '=') {
      try {
        const result = eval(myExpression);
        setMyDisplay(result.toString());
        setMyExpression(result.toString());
      } catch (error) {
        setMyDisplay('Error');
        setMyExpression('');
      }
    } else if (value === 'C') {
      setMyDisplay('0');
      setMyExpression('');
    } else {
      setMyExpression((prevExpression) => prevExpression + value);
      setMyDisplay((prevDisplay) =>
        prevDisplay === '0' ? value : prevDisplay + value
      );
    }
  };
  return (
    <div className="calculator">
      <div className="display">{myDisplay}</div>
      <div className="buttons">
        <button onClick={() => handleEvent('7')}>7</button>
        <button onClick={() => handleEvent('8')}>8</button>
        <button onClick={() => handleEvent('9')}>9</button>
        <button onClick={() => handleEvent('/')}>/</button>
        <button onClick={() => handleEvent('4')}>4</button>
        <button onClick={() => handleEvent('5')}>5</button>
        <button onClick={() => handleEvent('6')}>6</button>
        <button onClick={() => handleEvent('*')}>*</button>
        <button onClick={() => handleEvent('1')}>1</button>
        <button onClick={() => handleEvent('2')}>2</button>
        <button onClick={() => handleEvent('3')}>3</button>
        <button onClick={() => handleEvent('-')}>-</button>
        <button onClick={() => handleEvent('0')}>0</button>
        <button onClick={() => handleEvent('.')}>.</button>
        <button onClick={() => handleEvent('=')}>=</button>
        <button onClick={() => handleEvent('+')}>+</button>
      </div>
      <div>
        <button  className="clear" onClick={() => handleEvent('C')}>C</button>
      </div>
    </div>
  );
}
export default App;