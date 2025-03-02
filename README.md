# 🚀 Custom React Implementation 🚀

Welcome to the world of custom React! This project is a fun and simplified implementation of React, designed to help you understand the magic behind hooks like `useState`, `useEffect`, conditional rendering, and cleanup functions. Whether you're a React enthusiast or just curious about how frameworks work under the hood, this project is for you! Let's dive in and build something awesome together! 🛠️

---

## 🌟 Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [How to Use](#how-to-use)
5. [Example](#example)
6. [Future Improvements](#future-improvements)
7. [Conclusion](#conclusion)

---

## 🎉 Introduction

Ever wondered how React works behind the scenes? 🤔 This project is your chance to explore a custom React-like library built from scratch! While it’s not as powerful as the real React, it’s packed with core features like `useState`, `useEffect`, and conditional rendering. Think of it as React’s little sibling—small, fun, and full of potential! 🧒

---

## ✨ Features

Here’s what you can do with this custom React implementation:

- **useState**: Manage state like a pro! 🎛️
- **useEffect**: Handle side effects and cleanups like a boss. 🧹
- **Conditional Rendering**: Show or hide components based on state. 🎭
- **Component Lifecycle**: Basic lifecycle management with cleanup functions. 🔄
- **Virtual DOM**: A simple Virtual DOM for efficient updates. 🌐

---

## 🛠️ Prerequisites

Before you start, here are a few things to keep in mind:

1. **Component ID**: Every component needs a unique `componentId` prop. This helps the library keep track of your components. 🆔
2. **JSX Structure**: Make sure the `componentId` is at the top of your JSX structure. It’s like giving your component a name tag! 🏷️

---

## 🎈 How to Use

Ready to get started? Here’s how:

### Step 1: Clone the Repository 🐑

First, grab the code and make it yours! Run this command in your terminal:

```bash
git clone https://github.com/your-repo-url.git
cd your-repo-folder
```

### Step 2: Install Dependencies 📦
Make sure you have Node.js and npm installed. Then, run this command to install all the necessary dependencies:

```bash
npm install
```

This will install everything you need, including lodash, parcel, and typescript. 🛠️

### Step 3: Start the Development Server 🚀
Now, let’s fire up the development server! Run this command:

```bash
npm start
```

This will start the app using Parcel, and you can view it in your browser at http://localhost:1234. 🌐

### Step 5: Create Your Own Components 🧩
Now that everything is set up, you can start creating your own components! Follow the example in the index.ts file, and don’t forget to add a componentId to each component. 🎨

## 🎨 Example
Here’s a sneak peek of how to use this custom React implementation:
```javascript

import React from "./react";

export const APP = () => {
    const { createElement, useState, mount, useEffect } = React();

    const Timer = () => {
        const [time, setTime] = useState(new Date().toLocaleTimeString());
        const [isRunning, setIsRunning] = useState(true);

        useEffect(() => {
            let interval: any;
            if (isRunning) {
                interval = setInterval(() => {
                    setTime(new Date().toLocaleTimeString());
                }, 1000);
            }

            return () => {
                if (interval) {
                    console.log('Cleaning up timer');
                    clearInterval(interval);
                }
            };
        }, [isRunning]);

        return createElement("div", { className: "test-component", componentId: "timer-component" },
            createElement("h2", null, "Test 1: useEffect with Cleanup"),
            createElement("p", null, `Current time: ${time}`),
            createElement("button", {
                onClick: () => setIsRunning(!isRunning),
                className: "button"
            }, isRunning ? "Stop Timer" : "Start Timer"),
            createElement("p", { className: "effect-note" }, "Check console for effect logs")
        );
    }

    const AppComponent = () => {
        const [showTests, setShowTests] = useState(true);
        return createElement("div", { className: "app", componentId: "main-app-component" },
            createElement("h1", null, "useEffect Test Cases"),
            createElement("p", { className: "test-guide" },
                "Open the browser console to see effect lifecycles in action"),
            createElement("button", {
                onClick: () => setShowTests((prev: any) => !prev),
                className: "toggle-button"
            }, showTests ? "Hide All Tests" : "Show All Tests"),
            showTests && createElement("div", { className: "test-cases" },
                { componentFunc: Timer, componentId: "timer-component" }
            )
        );
    }

    mount({ componentFunc: AppComponent, componentId: "main-app-component" });
};

APP();

```

## 🚧 Future Improvements
1. This is just the beginning! Here are some ideas for future enhancements:
2. Performance Optimization: Make the Virtual DOM diffing algorithm faster and smarter. ⚡
3. More Hooks: Add hooks like useContext, useReducer, and useRef. 🎣
4. Error Handling: Improve error messages and debugging tools. 🐛
5. Component Lifecycle: Add more lifecycle methods to mimic React’s class components. 🔄
6. Async Rendering: Implement support for asynchronous rendering to improve performance. ⏳
7. Better TypeScript Support: Enhance TypeScript types for better developer experience. 🛠️
8. Testing Framework: Add a testing framework to ensure reliability and stability. 🧪

Happy coding, and may the hooks be with you! 🧙‍♂️✨







