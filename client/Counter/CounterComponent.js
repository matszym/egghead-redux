import React from 'react';

const CounterComponent = ({value, onIncrease, onDecrease}) => {
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
    <div className="counter" onWheel={ e => e.deltaY < 0 ? onIncrease() : onDecrease() }>
      <h1 className={counterValueClass}>{value}</h1>
      <button className="counter__button counter__button--decrease" onClick={onDecrease}>-</button>
      <button className="counter__button counter__button--increase" onClick={onIncrease}>+</button>
    </div>
  );
}
export default CounterComponent;