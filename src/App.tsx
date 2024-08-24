import { useState } from 'react';
import Option from './components/Game';
import Header from './components/Header';

export default function App() {
  let options = ["Rock", "Paper", "Scissors"]
  let [userScore, setUserScore] = useState(0)
  let [machineScore, setMachineScore] = useState(0)
  let [winner, setWinner] = useState("Make your first move")


  const machineChoice = () => {
    return options[Math.floor(Math.random() * 2)]
  }

  const handleSelectItem = (userOption: string) => {
    let machineOption = machineChoice()
    console.log(`You chose ${userOption} and the machine chose ${machineOption}`)

    if (
      (userOption === "Rock" && machineOption === "Scissors") ||
      (userOption === "Scissors" && machineOption === "Paper") ||
      (userOption === "Paper" && machineOption === "Rock")) {

      setUserScore((prevScore) => {
        const newScore = prevScore + 1;
        setWinner("User won")
        console.log(`You won. Your score is ${newScore}`)
        return newScore
      })

    } else if (
      (userOption === "Scissors" && machineOption === "Rock") ||
      (userOption === "Paper" && machineOption === "Scissors") ||
      (userOption === "Rock" && machineOption === "Paper")) {

      setMachineScore((prevScore) => {
        const newScore = prevScore + 1;
        setWinner("Machine won")
        console.log(`Machine won. Its score is ${machineScore}`)
        return newScore
      })

    } else {
      setWinner("Select your move and the machine will select automaticaly")
      console.log("Tie. No winners.")
    }

  }

  return (
    <>
      <Header userScore={userScore} machineScore={machineScore} />
      <div className='flex justify-center p-5'>
        <div className='flex text-center flex-col w-1/3'>
          <Option option={options[0]} onSelectOption={handleSelectItem} />
          <Option option={options[1]} onSelectOption={handleSelectItem} />
          <Option option={options[2]} onSelectOption={handleSelectItem} />
        </div>
        <div className='text-center w-1/3'>
          <p>{winner}</p>
        </div>
        <div className='text-center w-1/3'>
          <Option option="?" onSelectOption={handleSelectItem} />
        </div>
      </div>
    </>
  )
}