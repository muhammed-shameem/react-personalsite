import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    //Route,
    //Redirect
  } from "react-router-dom";
import { LandingLayout } from '../crust/layout';
import PublicRoute  from './PublicRoute'

export default function AppRouter() {
    
    return(
        <Router>
            <Switch>
                <PublicRoute path="/" component={LandingLayout} exact/>
            </Switch>
        </Router>
    )    
}