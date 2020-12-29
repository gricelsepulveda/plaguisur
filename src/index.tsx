import React from 'react'
import ReactDOM from 'react-dom'
import Home from "./views/Home"
import Navbar from "./components/Navbar/Navbar"

import "./styles/general.scss"

const App = () => <><Navbar/><Home/></>

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'))