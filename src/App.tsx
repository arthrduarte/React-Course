import { useState } from 'react';
import Game from './components/Game';
import Header from './components/Header';

export default function App() {
  let [userScore, setUserScore] = useState(0)
  let [machineScore, setMachineScore] = useState(0)

  return (
    <>
      <Header userScore={userScore} machineScore={machineScore} />
      <Game setUserScore={setUserScore} setMachineScore={setMachineScore} />
    </>
  )
}