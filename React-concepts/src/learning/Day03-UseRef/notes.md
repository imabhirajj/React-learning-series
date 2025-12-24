# React Hooks Notes — useState vs useRef

## 1. useState — Overview

useState is used to manage state that affects the UI.

### Key Points:
- State change triggers a re-render of the component
- Used when UI needs to update
- React keeps state in sync with the rendered output

### Example:
```jsx
const [count, setCount] = useState(0);
