import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./components/Pages/Home"
import About from "./components/Pages/About"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"

import ContactState from "./context/contact/ContactState.js"
import AuthState from "./context/auth/AuthState.js"
import AlertState from "./context/alert/AlertState.js"
import Alerts from "./components/layout/Alerts"

import "./App.css"

const App = () => {
  return (
    <AlertState>
      <AuthState>
        <ContactState>
          <Router>
            <Fragment className="App">
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </ContactState>
      </AuthState>
    </AlertState>
  )
}

export default App
