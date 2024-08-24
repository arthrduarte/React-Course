import { useState } from "react";

interface Props {
    setUserScore: React.Dispatch<React.SetStateAction<number>>;
    setMachineScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function Game({ setMachineScore, setUserScore }: Props) {
    let options = ["👊🏼", "🖐🏼", "✌🏼"]
    let [winner, setWinner] = useState("Make your first move")

    const machineChoice = () => {
        return options[Math.floor(Math.random() * 2)]
    }

    const handleSelectItem = (userOption: string) => {
        let machineOption = machineChoice()

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


    // Figure out how to add a class to the last selected option. The last clicked option will have a different bg-color

    return (
        <>
            <div className='flex justify-center p-5'>
                <div className='flex flex-col items-center w-1/3 space-y-5'>
                    <div className="cursor-pointer w-[10rem] h-[10rem] p-5 hover:bg-slate-50 border rounded flex justify-center items-center" onClick={() => handleSelectItem(options[0])}>
                        <p className=" text-[3rem]">{options[0]}</p>
                    </div>
                    <div className="cursor-pointer w-[10rem] h-[10rem] p-5 hover:bg-slate-50 border rounded flex justify-center items-center" onClick={() => handleSelectItem(options[1])}>
                        <p className=" text-[3rem]">{options[1]}</p>
                    </div>
                    <div className="cursor-pointer w-[10rem] h-[10rem] p-5 hover:bg-slate-50 border rounded flex justify-center items-center" onClick={() => handleSelectItem(options[2])}>
                        <p className=" text-[3rem]">{options[2]}</p>
                    </div>
                </div>
                <div className='text-center w-1/3'>
                    <p>{winner}</p>
                </div>
                <div className='flex flex-col items-center w-1/3'>
                    <div className="cursor-pointer w-[10rem] h-[10rem] p-5 hover:bg-slate-50 border rounded flex justify-center items-center">
                        <p className=" text-[3rem]">?</p>
                    </div>
                </div>
            </div>
        </>
    )
}