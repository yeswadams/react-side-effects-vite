// Step 1: Accept `fetchJoke` as a prop

const FetchButton = ({ onClick }) => {
  return (
    // Step 2: Add an onClick event that calls `fetchJoke`
    <button className="fetch-button" onClick={onClick}>Get a New Joke</button>
  )
}

export default FetchButton
