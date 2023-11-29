# ReactJS

- TODO: Reasearch about Call, Apply and Bind
- TODO: Deep destructuring `{comments.map(({ _id, text, owner: { email } }) => (`
- TODO: Form validation react-hook-form

TODOS for VSCode:
    - How to select Current Word. How to expand selection to next bracket.
    - How to surround current word with quotes or brackets.

Checkout why component is re-rendered.
Chrome extension: React Developer Tools -> React Profiler. In Settings "Record why each component rendered";

`Ctrl + D` - Multi cursor select of the same word

## 01. Intro to React an JSX

```bash
npm init --yes
npm install react react-dom
```

```bash
# Init vite project
npm create vite .
npm install
npm run dev

```

## 02. Components: Basic Idea

```bash
# Init vite project
npm create vite components-basics -- --template react
cd components-basics
npm install
npm run dev
```

Example of a component with a state:

```jsx
import React, { useState } from 'react';

export default function Timer(props) {
    const [time, setTime] = useState(0); // Pass initial state
    console.log(`Current time is = ${time}`);
    // Note: Don't use setTimeout, useEffect is more appropriate
    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            <h3>Timer</h3>
            <p>{time}</p>
        </div>
    );
}
```

- Important: When one or many of the states change, the component is re-rendered.
- Chrome extension: React Developer Tools
- TODO: Test debugging via VSCode and Chrome (launchSettings.json)

Libraries with built-in components

- Ant Design - <https://ant.design/>
- React Bootstrap - <https://react-bootstrap.github.io/>
- Something based on Tailwind CSS - <https://tailwindcss.com/>

## 04. Workshop

```bash
npm create vite client -- --template react
cd client
npm install
npm run dev
# In separate terminal run the server
cd server && node server.js
# Init git repo for the client
git init
git add .\README.md
git commit -m "Initial Commit" 
git branch -M main
git remote add origin https://github.com/dimitar-grigorov/React-UserList.git
git add --all
git commit -m "Add initial files"
git push -u origin main
```

### When using useRef and want to submit form from other component

```jsx
const formRef = useRef(null);
const submitForm = () => {
    // formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));    
    if (formRef.current) {
        formRef.current.requestSubmit();
    }
}
<form ref={formRef} onSubmit={handleSubmit}>
```

Reasons for re-rendering: mount, parent re-render, props change, hooks/state change, context change

06. Routing Workshop

```bash
cd "$(git rev-parse --show-toplevel)/06-Routing-Workshop/client/"
npm create vite . -- --template react
npm install
# In separate folder clone the server
git clone https://github.com/softuni-practice-server/softuni-practice-server.git
cd softuni-practice-server
npm install
npm run client
npm run build
# Copy dist/server.js to the server folder
# In separate terminal run the server
cd server && node server.js
# Run the client
cd "$(git rev-parse --show-toplevel)/06-Routing-Workshop/client/"
npm run dev

npm install react-router-dom
```