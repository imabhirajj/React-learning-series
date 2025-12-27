# Day 8 – useReducer (with useContext)

## 1. What is useReducer?

`useReducer` is an advanced React hook used to manage **complex state logic**.
It is an alternative to `useState` when state updates become **action-based**.

Simple state → useState  
Complex state → useReducer

---

## 2. Why useReducer?

Problems with `useState` in complex apps:
- Multiple related states
- Scattered update logic
- Hard to debug
- Poor scalability

`useReducer` centralizes state updates in one place.

---

## 3. Basic Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);

## 04. What is an Action?

An **action** is a plain JavaScript object that describes  
**what happened** in the application and causes a state change.

Action ≠ button  
Action ≠ click  
Action = event description

Example:
```js
dispatch({
  type: "LOGIN",
  payload: { name: "Abhiraj" }
});




# Simple State vs Complex State (useState vs useReducer) – Hinglish Notes

## 1. Real Production Reality (Important)

Production website me:
- ❌ Har jagah reducer use nahi hota
- ✅ useState abhi bhi bahut zyada use hota hai
- ✅ Reducer sirf important + complex logic ke liye hota hai

Reducer ka use “professional code” ke liye nahi,
**complex state transitions** ke liye hota hai.

---

## 2. Simple State kya hota hai? (useState)

### Definition:
Jab state:
- Sirf ek value ho
- Direct update hoti ho
- Koi heavy rules na ho

👉 Ye **Simple State** hota hai.

### Real-life analogy:
**Light switch**
- On / Off
- Koi rule nahi
- Seedha change

### React examples:
```js
const [isOpen, setIsOpen] = useState(false);
const [theme, setTheme] = useState("light");
const [input, setInput] = useState("");
