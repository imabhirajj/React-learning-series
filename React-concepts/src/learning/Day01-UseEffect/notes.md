Day 01 – useEffect

// useEffect() = React Hook that tells React to DO SOME CODE WHEN (pick one):
// 1. This component re-renders
// 2. This component mounts
// 3. The state of a value changes


// useEffect(function, [dependencies])

// 1. useEffect(() => {})
//    Runs after every re-render

// 2. useEffect(() => {}, [])
//    Runs only on mount

// 3. useEffect(() => {}, [value])
//    Runs on mount + when value changes


// USE CASES OF useEffect:

// 1. Event listeners
// 2. DOM manipulation
// 3. Subscriptions (real-time updates)
// 4. Fetching data from an API
// 5. Cleanup when a component unmounts
