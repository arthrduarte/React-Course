import { useState } from "react";

interface Props {
    setUserScore: React.Dispatch<React.SetStateAction<number>>;
    setMachineScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function Game({ setMachineScore, setUserScore }: Props) {
    let options = ["👊🏼", "🖐🏼", "✌🏼"]
    let [winner, setWinner] = useState("Make your move")
    let [machineSquare, setMachineSquare] = useState("?")
    let [selectedOption, setSelectedOption] = useState<string | null>(null)
    let [allowedPlay, setAllowedPlay] = useState(true)

    const machineChoice = () => {
        return options[Math.floor(Math.random() * 2)]
    }

    const handleSelectItem = (userOption: string) => {
        if (!allowedPlay) {
            handlePlayAgain()
            return
        }
        let machineOption = machineChoice()
        setMachineSquare(machineOption)
        setSelectedOption(userOption)
        setAllowedPlay(false)

        if (
            (userOption === options[0] && machineOption === options[2]) ||
            (userOption === options[2] && machineOption === options[1]) ||
            (userOption === options[1] && machineOption === options[0])) {

            setUserScore((prevScore) => {
                const newScore = prevScore + 1;
                setWinner("User won")
                return newScore
            })

        } else if (
            (userOption === options[2] && machineOption === options[0]) ||
            (userOption === options[1] && machineOption === options[2]) ||
            (userOption === options[0] && machineOption === options[1])) {

            setMachineScore((prevScore) => {
                const newScore = prevScore + 1;
                setWinner("Machine won")
                return newScore
            })

        } else if (userOption === machineOption) {
            setWinner("Tie. No winners.")
        } else {
            setWinner("Select your move and the machine will select automaticaly")
        }
    }
    const handlePlayAgain = () => {
        setSelectedOption(null)
        setWinner("Make your move")
        setAllowedPlay(true)
        setMachineSquare("?")
    }


    // Figure out how to add a class to the last selected option. The last clicked option will have a different bg-color

    return (
        <>
            <div className='flex flex-col lg:flex-row justify-center p-5'>
                <div className='flex lg:flex-col lg:items-center justify-center lg:w-1/5 lg:space-y-5'>
                    <div className={`cursor-pointer lg:w-[10rem] lg:h-[10rem] w-[7rem] h-[7rem] p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ${selectedOption && selectedOption !== options[0] ? 'hidden' : 'flex'} justify-center items-center`} onClick={() => handleSelectItem(options[0])}>
                        <p className=" text-[3rem]">{options[0]}</p>
                    </div>
                    <div className={`cursor-pointer lg:w-[10rem] lg:h-[10rem] w-[7rem] h-[7rem] p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ${selectedOption && selectedOption !== options[1] ? 'hidden' : 'flex'} justify-center items-center`} onClick={() => handleSelectItem(options[1])}>
                        <p className=" text-[3rem]">{options[1]}</p>
                    </div>
                    <div className={`cursor-pointer lg:w-[10rem] lg:h-[10rem] w-[7rem] h-[7rem] p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ${selectedOption && selectedOption !== options[2] ? 'hidden' : 'flex'} justify-center items-center`} onClick={() => handleSelectItem(options[2])}>
                        <p className=" text-[3rem]">{options[2]}</p>
                    </div>
                </div>
                <div className='text-center lg:w-1/5'>
                    <p className="font-bold text-[2rem] my-5">{winner}</p>
                    <button
                        onClick={() => handlePlayAgain()}
                        className="text-white font-bold rounded-lg px-3 py-2 mb-5 transition ease-in bg-[#E84855] hover:bg-[#ff7480]"
                    >Play Again</button>
                </div>
                <div className='flex flex-col items-center lg:w-1/5'>
                    <div className="lg:w-[10rem] lg:h-[10rem] w-[7rem] h-[7rem] p-5 bg-white border border-gray-200 rounded-lg shadow flex justify-center items-center">
                        <p className=" text-[3rem]">{machineSquare}</p>
                    </div>
                </div>
            </div>
        </>
    )
}