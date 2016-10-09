import React from 'react';

const CounterComponent = ({value, increase, decrease}) => {
  let modifier;

  if (value === 0) {
    modifier = 'counter__value--neutral';
  } 
  else if (value > 0) {
    modifier = 'counter__value--positive';
  }
  else if (value < 0) {
    modifier = 'counter__value--negative';
  }

  const counterValueClass = 'counter__value ' + modifier;

  return (
    <div className="counter">
      <h1 className={counterValueClass}>{value}</h1>
      <button className="counter__button counter__button--decrease" onClick={decrease}>-</button>
      <button className="counter__button counter__button--increase" onClick={increase}>+</button>
    </div>
  );
}
export default CounterComponent;