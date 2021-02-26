import React from 'react';
import TextLoop from "react-text-loop";
import { makeStyles } from '@material-ui/core/styles';
import CoverPhoto from '../../../assets/images/cover.png';
import {
  DownArrow,
  TextAnimation
} from '../../elements';

const useStyles = makeStyles((theme) => ({
    container:{
      position:'relative',
      zIndex:1,
      height:'100vh',
      width:'100%',
    },
    bg:{
      position:'absolute',
      zIndex:-1,
      backgroundImage: `url(${CoverPhoto})`,
      backgroundSize:'cover',
      backgroundPosition:'center center',
      opacity:0.3,
      height:'100%',
      width:'100%',
    },
    textShow:{
      opacity:1,
      color:'#ffffff',
      width:'100%',
      height:'35%',
      marginTop:'15%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-around',
      fontFamily:'Lucida Console',
      fontSize:'70px',
      fontWeight:'bold',
      [theme.breakpoints.down('sm')]:{
        marginTop:'70%',
        fontSize:'30px',
        height:'20%'
      }
    },
    aboutText:{
      fontWeight:'normal',
      fontSize:'40px',
      [theme.breakpoints.down('sm')]:{
        fontSize:'20px'
      }
    }
    
  }));

function FirstSection() {
    const classes=useStyles();
    return(
        <div className={classes.container}>
          <div className={classes.bg}></div>
          <div className={classes.textShow}>
              <div>I am</div>
              <div>Muhammed Shameem</div>
              <TextLoop>
                <span className={classes.aboutText}>MCA Graduate</span>
                <span className={classes.aboutText}>React JS Developer</span>
                <span className={classes.aboutText}>Django Developer</span>
              </TextLoop>
              
          </div>
          <DownArrow />
        </div>
    )
}

export default FirstSection;