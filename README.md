1.What is JSX, and why is it used?

Ans: JSX is Javascript XML that looks like HTML but Works in javascript.
The use of JSX is given below.
The code looks more readable,creates a virtual DOM and enables javascript inside User Interface.

2.What is the difference between State and Props?

Ans:State: State is internal data of component.it can change within the component.it is use for track dynamic changes like input and clicks
Props: Props is external data passed to a component.it cannot be changed by the child. it used to pass data from parent to child components.

3.What is the useState hook, and how does it work?

Ans:useState is a React hook used to add state to functional components.
it has three state. one state assignthe value of the state.Another state update the value of state.one more state is the starting value of the state.

4.How can you share state between components in React?

Ans: 1.Lift state up
     2.Context ApI
     3.State management libraries
     
5.How is event handling done in React?

Ans: Pass a function as the event handler instead of a string.
     
     

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
