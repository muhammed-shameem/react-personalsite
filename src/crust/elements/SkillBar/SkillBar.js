import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    containerStyle:{
        height: 40,
        width: '100%',
        backgroundColor: "#e0e0de",
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
        backgroundColor:props => props.bgcolor,
        borderRadius: 'inherit',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    topicStyle:{
        paddingLeft: 10,
        color: 'white',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]:{
            fontSize:'10px'
        }
    },
    labelStyle:{
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]:{
            fontSize:'10px'
        }
    },

}));

const SkillBar = (props) => {
    const { skill, bgcolor, completed } = props;
    const classes=useStyles({completed,bgcolor})
    
  
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