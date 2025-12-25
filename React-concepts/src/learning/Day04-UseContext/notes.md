# Day 7 – React useContext (Notes)

## 1. Problem: Prop Drilling

Prop drilling tab hota hai jab data top-level component me hota hai
aur usse deep child component tak pahunchane ke liye
beech ke sab components ko props pass karne padte hain,
chahe unko data ki zarurat ho ya nahi.

Example:
A → B → C → D → E → F  
(Data sirf A aur F ko chahiye)

Problems:
- Code verbose ho jata hai
- Components tightly coupled ho jate hain
- Refactoring difficult hoti hai

---

## 2. Solution: useContext

`useContext` shared state ko directly access karne deta hai
bina har level par props pass kiye.

Context is NOT global.
Context Provider ke scope ke andar hi accessible hota hai.

---

## 3. Core Concepts

### createContext
- Shared data ka channel create karta hai
- Data store nahi karta

```js
const MyContext = createContext();
