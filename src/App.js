import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home'
import Result from './Pages/Result'

function App() {
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
