import React from 'react'
import classes from './Counter.scss'

export const Counter = (props) => (
  <div>
    <h2 className={classes.counterContainer}>
      Counter:
      {' '}
      <span className={classes['counter--green']}>
        {props.counter}
      </span>
    </h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
    <div>
      <label>Type some stuff</label> <input value={props.text} onChange={(event) => props.onTextChange(event.target.value)} />
    </div>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  text: React.PropTypes.string,
  onTextChange: React.PropTypes.func
}

export default Counter
