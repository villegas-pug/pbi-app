import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from 'components/Menu'

export default function DashboardRouter() {
   return (
      <>
         <Router>
            <Menu />
            <Switch>
               <Route path='/test' render={() => <h1>TEST</h1>} />
            </Switch>
         </Router>
      </>
   )
}