import React,{useEffect,useState} from 'react';
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import {  makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    NavBar,
    FirstSection,
    SecondSection
} from '../../components/LandingPage';

const useStyles = makeStyles((theme) => ({
    container:{
      display:'flex',
      flexDirection:'column',
      //width:'100%',
      minHeight:'100vh',
      position:'relative',
      backgroundColor:props =>props.darkMode? '#000000':'inherit',
      overflowX:'hidden'
    },
    Loading:{
        alignSelf:'center',
        marginTop:'auto',
        marginBottom:'auto',
        color:props=>props.darkMode?'white':'black'
    }
  }));


export default function LandingPage(){
    const [cookies, setCookie] = useCookies(["darkMode"]);
    const darkMode=cookies?.darkMode==='false'?false:true;
    const [isLoading,SetIsLoading]=useState(true);
    useEffect(() => {
        setTimeout(() => SetIsLoading(false), 500)
    }, []);
    const classes = useStyles({darkMode});
    return( 
        <CookiesProvider>
            <div className={classes.container}>
                {isLoading?
                    <CircularProgress className={classes.Loading}/>
                :
                <React.Fragment>
                    <NavBar darkMode={darkMode} setCookie={setCookie}/>
                    <FirstSection darkMode={darkMode}/>
                    <SecondSection darkMode={darkMode}/>
                </React.Fragment>
                }
            </div>  
        </CookiesProvider>      
    )
}