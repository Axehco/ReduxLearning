/* import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root')) */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

store.subscribe(() => {
  root.render(<App />);
})

// ReactDOM.createRoot(document.getElementById("root")).render(<App />)