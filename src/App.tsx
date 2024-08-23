import { useState } from 'react';
import Option from './components/Option';

export default function App() {
  let options = ["Rock", "Paper", "Scissors"]
  let [userScoreboard, setUserScoreboard] = useState(0)
  let [machineScoreboard, setMachineScoreboard] = useState(0)


  const machineChoice = () => {
    return options[Math.floor(Math.random() * 2)]
  }

  const handleSelectItem = (option: string) => {
    let machineOption = machineChoice()
    console.log(`You chose ${option} and the machine chose ${machineOption}`)

    if ((option === "Rock" && machineOption === "Scissors") || (option === "Scissors" && machineOption === "Paper") || (option === "Paper" && machineOption === "Rock")) {
      setUserScoreboard(userScoreboard++)
      console.log(`You won. Your score is ${userScoreboard}`)
    } else if ((option === "Scissors" && machineOption === "Rock") || (option === "Paper" && machineOption === "Scissors") || (option === "Rock" && machineOption === "Paper")) {
      setMachineScoreboard(machineScoreboard++)
      console.log(`Machine won. Its score is ${machineScoreboard}`)
    } else {
      console.log("Tie. No winners.")
    }

  }

  return (
    <>
      <div className='text-center p-5'>
        <div>
          <p>Scoreboard</p>
        </div>
        <div className='flex'>
          <div className="w-1/3">User</div>
          <div className="w-1/3">{userScoreboard} x {machineScoreboard}</div>
          <div className="w-1/3">Machine</div>
        </div>
      </div>
      <div className='flex justify-evenly p-5'>
        <div className='flex flex-col'>
          <Option option={options[0]} onSelectOption={handleSelectItem} />
          <Option option={options[1]} onSelectOption={handleSelectItem} />
          <Option option={options[2]} onSelectOption={handleSelectItem} />
        </div>
        <div>
          <p>User won</p>
        </div>
        <div>
          <Option option="?" onSelectOption={handleSelectItem} />
        </div>
      </div>
    </>
  )
}