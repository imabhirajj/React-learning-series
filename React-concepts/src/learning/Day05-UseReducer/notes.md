# Day 8 – Actions (useReducer + useContext)

## 1. What is an Action?

An **action** is a plain JavaScript object that describes  
**what happened** in the application and causes a state change.

Action ≠ button  
Action ≠ click  
Action = event description

---

## 2. Action vs UI Event (Very Important)

### UI Event
- Button click
- Form submit
- Key press

Example:
```jsx
<button onClick={login}>Login</button>
