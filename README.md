Intro to Hooks, React lecture for Wyncode Academy. September 4, 2019 11am - 1pm.

A short intro to React Hooks and how they are used and compared to their class based component counterparts.

Focusing on 3 specific Hooks, useState, useContext and useEffect.

1) Create a fresh react app with create react app command. This lesson is not only an intro to React Hooks but also an overview of some React best practices. Clean up files that are not needed and trim down code in some of these files to make sure that everything is at a neat starting point.

2) Begin the app by creating a context for our app. We will demonstrate the use of context with a simple todo list and a counter to demonstrate some of the component lifecycle methods used with useEffect.

3) Set up initial components, we need a Counter, a TodoList and an input for the TodoList to show how we can pass only what we need from context to the corresponding components. Additionally, we will be trying out some importing best practices. Creating an index.js file at the root folder for the components allows less lines of import code needed when passing around components. When  importing files from a folder, JS defaults to an index.js file and will use all the exports from the folder that we can destructure as imports in the files we need them (in this case our App.js). Each of these components will be created as a folder which will hold not only the js file but its corresponding css which will be written as modules which will then be imported to the component in order to use specific stylings and prevent any undesired global stylings.
