import ListGroup from './components/ListGroup';

export default function App() {
  let items = ["Paper", "Rock", "Scissors"]
  const handleSelectItem = (index: number) => {
    let machineItem = Math.floor(Math.random() * 2)
    console.log(`You chose ${items[index]} and the machine chose ${items[machineItem]}`)

    if ((index === 0 && machineItem === 1) || (index === 1 && machineItem === 2) || (index === 2 && machineItem === 0)) {
      console.log("You won")
    } else if ((index === 1 && machineItem === 0) || (index === 2 && machineItem === 1) || (index === 0 && machineItem === 2)) {
      console.log("Machine won")
    } else {
      console.log("Tie. No winners.")
    }

  }

  return (
    <>
      <ListGroup items={items} heading="Options" onSelectItem={handleSelectItem} />
    </>
  )
}