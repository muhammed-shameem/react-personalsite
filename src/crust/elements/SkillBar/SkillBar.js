import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    containerStyle:{
        height: 40,
        width: '100%',
        backgroundColor:props=>props.darkMode? "#e0e0de":'#000000',
        border: props=>props.darkMode?"2px solid #e0e0de":'2px solid #000000',
        borderRadius: 50,
        marginTop:20,
        [theme.breakpoints.down('sm')]:{
            marginTop:10,
            height:20
        }
    },
    fillerStyle:{
        height: '100%',
        width:props => `${props.completed}%`,
        //backgroundColor:props => props.bgcolor,
        backgroundColor:props=>props.darkMode?'#000000':'#e0e0de',
        borderRadius: 'inherit',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    topicStyle:{
        paddingLeft: 10,
        color:props=>props.darkMode? 'white':'black',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]:{
            fontSize:'10px'
        }
    },
    labelStyle:{
        padding: 5,
        color:props=>props.darkMode? 'white':'black',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]:{
            fontSize:'10px'
        }
    },

}));

const SkillBar = (props) => {
    const { skill, bgcolor, completed,darkMode } = props;
    const classes=useStyles({completed,bgcolor,darkMode})
    
  
    return (
      <div className={classes.containerStyle}>
        <div className={classes.fillerStyle}>
          <span className={classes.topicStyle}>{skill}</span>
          <span className={classes.labelStyle}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default SkillBar;