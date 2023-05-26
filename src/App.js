import React, { useState } from 'react';
import './index.scss';

function App() {
let [count ,setCount] = useState(0)
const onClickMinus = () => setCount(count && --count)
const onClickPlus = () => setCount(++count)

  return (
    <div className="App">
      <div>
        <h2>Лічильник:</h2>
        <h1>{ count }</h1>
        <button className="minus" onClick={onClickMinus}>- Додати</button>
        <button className="plus" onClick={onClickPlus}>Зменшити +</button>
      </div>
    </div>
  );
}

export default App;
