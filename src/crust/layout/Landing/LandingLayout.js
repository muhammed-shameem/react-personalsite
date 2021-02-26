import React,{useEffect,useState} from 'react';
import { Route, Switch} from "react-router-dom";
import {LandingPage} from '../../container'
import {Loading} from '../../elements';


function LandingLayout(){
    const [isLoading,SetIsLoading]=useState(true);
    useEffect(() => {
        setTimeout(() => SetIsLoading(false), 2000)
    }, []);

    return(
        <React.Fragment>
            {isLoading?
            <Loading
                type='cylon'
                color='#A9A9A9'
                // className={}
            />
            :
            <Switch>
                <Route exact path="/" component={LandingPage} />
            </Switch>
            }
        </React.Fragment>
        
    )
}

export default LandingLayout