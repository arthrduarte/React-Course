import { useState } from "react"

interface Props {
    items: string[]
    heading: string
    onSelectItem: (index: number) => void
}

export default function ListGroup({ items, heading, onSelectItem }: Props) {
    let [selectedOption, setSelectedOption] = useState(-1)

    return (
        <>
            <p>{heading}</p>
            {items.length === 0 && <p>No options found.</p>}
            {selectedOption != -1 ? <p>You chose {selectedOption} </p> : <p>You didn't choose anything</p>}
            <ul>
                {items.map((item, index) => (
                    <li key={item} onClick={() => {
                        setSelectedOption(index)
                        onSelectItem(index)
                    }} >{item}</li>
                ))}
            </ul>
        </>
    )
}