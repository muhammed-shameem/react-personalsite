import React from 'react';
import { Route, Switch} from "react-router-dom";
import {LandingPage} from '../../container'


function LandingLayout(){
    return(
            <Switch>
                <Route exact path="/" component={LandingPage} />
            </Switch>
    )
}

export default LandingLayout