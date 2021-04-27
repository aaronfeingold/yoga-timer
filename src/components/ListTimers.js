import React from 'react'
import { useSelector } from 'react-redux';
import { selectTimer } from '../actions';
import TimerView from './TimerView'


export default function ListTimers() {
  const timers = useSelector(state => state.timers)
  const timerCards = timers.map((timer, i) => {
    return (
      <TimerView key={`timer-${i}`} timer={timer} index={i} />
    )
  })

  return (
    <div>
      {timerCards}
    </div>
  )
}