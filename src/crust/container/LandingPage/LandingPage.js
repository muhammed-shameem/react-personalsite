import React from 'react';
import {  makeStyles } from '@material-ui/styles';
import {
    NavBar,
    FirstSection,
    SecondSection
} from '../../components/LandingPage';

const useStyles = makeStyles((theme) => ({
    container:{
      display:'flex',
      flexDirection:'column',
      width:'100%',
      minHeight:'100vh',
      position:'relative',
      backgroundColor: '#000000',
      overflowX:'hidden'
    },
    
  }));


export default function LandingPage(){
    const classes = useStyles();
    
    return( 
        <div className={classes.container}>
            <NavBar />
            <FirstSection />
            <SecondSection />
        </div>        
    )
}