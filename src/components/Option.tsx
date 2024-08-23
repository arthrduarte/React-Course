interface Props {
    option: string;
    onSelectOption: (option: string) => void
}

export default function Option({ option, onSelectOption }: Props) {
    return (
        <>
            <div className="p-5 border rounded">
                <p onClick={() => {
                    onSelectOption(option)
                }}>{option}</p>
            </div>
        </>
    )
}