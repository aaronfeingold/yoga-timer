import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTimer } from '../actions';
import './TimerView.css'
import { formatTime } from '../utils/index'

export default function TimerView(props) {
  const { index, timer } = props
  const dispatch = useDispatch()

  return(
    <div className="TimerView">
      <h1>{timer.name}</h1>
      <h2>{formatTime(timer.time)}</h2>
      <button onClick={() => dispatch(toggleTimer(index))}> {timer.isRunning ? "Stop" : "Start"}</button>
    </div>
  )
}