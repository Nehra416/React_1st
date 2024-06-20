import React from 'react'

export const Home = () => {
    return (
        <div className='home'>
            <h1>What is React?</h1>
            <p>React is a popular JavaScript library used for building user interfaces, especially for single-page applications where UI updates are frequent. Developed and maintained by Facebook, React allows developers to create reusable UI components and efficiently manage the state of these components. </p>
            <h1>Features and concepts of React.</h1>
            <ol>
                <li><p>Component-Based: React applications are built using components. A component in React is a reusable piece of UI that can be composed together to build complex UIs. Each component manages its own state and can be rendered independently.</p></li>
                <li><p>Virtual DOM: React uses a virtual DOM (Document Object Model) to optimize the updating process. Instead of directly manipulating the browser's DOM for every change, React creates a virtual representation of the DOM in memory and updates only the parts of the actual DOM that have changed. This approach helps in improving performance and efficiency.</p></li>
                <li><p>JSX: JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe what the UI should look like. It allows you to write HTML-like code directly within your JavaScript code. JSX gets transformed into regular JavaScript function calls during the build process.</p></li>
                <li><p>React Router: While React itself is focused on UI components, React Router is a widely used library for managing navigation and routing in React applications. It allows you to handle different UR</p></li>
            </ol>
        </div>
    )
}
