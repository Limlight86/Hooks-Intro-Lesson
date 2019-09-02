Intro to Hooks, React lecture for Wyncode Academy. September 4, 2019 11am - 1pm.

A short intro to React Hooks and how they are used and compared to their class based component counterparts.

Focusing on 3 specific Hooks, useState, useContext and useEffect.

1) Create a fresh react app with create react app command. This lesson is not only an intro to React Hooks but also an overview of some React best practices. Clean up files that are not needed and trim down code in some of these files to make sure that everything is at a neat starting point.

2) Begin the app by creating a context for our app. We will demonstrate the use of context with a simple todo list and a counter to demonstrate some of the component lifecycle methods used with useEffect. Wrap all the components in the App.js with the context provider, explain what this does and the pitdfalls of doing this in bigger apps and the advantages of reducing re-renders and how multiple context providers might prove useful. Talk about props.children and lightly explain higer order components.

3) Set up initial components, we need a Counter, a TodoList and an input for the TodoList to show how we can pass only what we need from context to the corresponding components. Additionally, we will be trying out some importing best practices. Creating an index.js file at the root folder for the components allows less lines of import code needed when passing around components. When  importing files from a folder, JS defaults to an index.js file and will use all the exports from the folder that we can destructure as imports in the files we need them (in this case our App.js). Each of these components will be created as a folder which will hold not only the js file but its corresponding css which will be written as modules which will then be imported to the component in order to use specific stylings and prevent any undesired global stylings.

4) Setting up the Counter will demonstrate the useEffect hook in order to show how lifecycle methods are replaced by hooks. We will be putting together an interval that will increase the counter state. This will be a simple counter that will be running to keep track of time on the page (but also to use as an example of re-renders in the component tree.) We will use the counter state that we declared in our context and create the interval on mount with useEffect and unmount it when the page closes. Creating an interval with useEffect is a bit tricky the correct syntax needs to be used. We have included console logs for the mounting and unmounting to demonstrate the timing of these lifecycles (a button will be added to App.js to mount and unmount the component to demonstrate this). When using setCounter, its important to take advantage of one of the arguments that can be passed to it, prevState, so we can set the counter properly without it resetting back to its initial state. useEffect is a modular function, it can be customized in many ways, using a return statement we can implement the componentWillUnmount lifecycle hook, passing it an anonymous function, we can setup what happens on unmount, in this case, we log the action, clear the interval and return the counter state to 0. useEffect takes a second argument, in this case its an array containing setCounter, this will instruct useEffect to run only on mounting and that setCounter is a dependancy of useEfect since it was declared outside of the function (we are importing it from context). In this second arguement you can specficy when you want useEffect to be triggered, like on certain re-renders of components or specfic timings or jsut once on mount in the case of it working as a componentDidMount.
```
useEffect(() => {
    console.log("Counter Mounted!");
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);
    return () => {
      console.log("Counter Unmounted!");
      clearInterval(interval);
      setCounter(0);
    };
  }, [setCounter]);
  ```

5) In order to demonstrate the counter unmounting, we will implement a simple boolean state in the app.js file to determine whether the counter component should be displayed.

6) We have split up the todo list and the input for populating it to show how we can use the specific piences on context when we declare a state in it. Returning to context we will create a function that will add todo items to our todo list, to demonstrate that context can pass not jsut state and state setters but also custom functions created in it. Explain how when setting state it is important to restate the previous state plus the addtion, we do this by spreading the old state and then adding the new item at the end using es6 syntax (this can also work when chaning values inside a state that is a n object).

7) In the todo input component we need to imort the new function we made from context. We implemebt another simple state to handle the value of our input, its proper form in React to use state when setting something in another piece of state instead of setting directly from your html values, we can also change the input value later as part of our handleSubmit. Text will be a simple onChange that we declare on the input which will be holding the value until it is needed to add a todo.
```
const handleSubmit = e => {
    e.preventDefault();
    const newTodo = { text, id: uuidv4() };
    addTodo(newTodo);
    setText("");
  };
  ```
  The handle submit function will create a new object to serve as a new entry in the todoList array we have in context (we will install uuidv4 to handle id generation). Using the function that we imported from context, we can easily just add a new item to our todoList and then set the input value back to an empty string. We can talk about validation here and how we can expand the functionality of this code to make it more defensive.

  8) The todoList component is very simple, we import our todoList from context and then map over it to populate our todolist. This is a good time to talk about how we didnt use props, the advantages of context and when to use props. Probably make a component for each entry to show how this would work.