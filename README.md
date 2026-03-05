Here's a clear breakdown of each concept:

1. What is JSX and why is it used?
JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code inside JavaScript.
jsx// Without JSX — hard to read

// With JSX — clean and readable
JSX is not valid JavaScript — Babel compiles it into React.createElement() calls behind the scenes. It makes UI code more intuitive and easier to maintain.

2. State vs Props
PropsStatePassed fromParent to ChildManaged inside componentMutable? Read-only Can be changedWho controls it?ParentThe component itself
jsx// Props — parent passes data down, child can't change it



3. useState hook
useState lets a component hold and update its own data. When state changes, the component re-renders.


4. Sharing state between components
There are 3 main ways:
 Lift state up — share via parent

Context API — share globally without prop drilling
jsxconst CountContext = createContext()



State management library — Redux, Zustand for large apps.

5. Event handling in React
React uses camelCase event names and passes functions, not strings.

key difference from HTML is that you always pass a function reference, never a string, and use e.preventDefault() to stop default browser behavior.