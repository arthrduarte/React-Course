interface Props {
    userScore: number;
    machineScore: number
}

export default function Header({ userScore, machineScore }: Props) {

    return (
        <>
            <div className='text-center p-5'>
                <div>
                    <p>Scoreboard</p>
                </div>
                <div className='flex'>
                    <div className="w-1/3">User</div>
                    <div className="w-1/3">{userScore} x {machineScore}</div>
                    <div className="w-1/3">Machine</div>
                </div>
            </div>
        </>
    )
}