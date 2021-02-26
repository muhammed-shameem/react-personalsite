import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        position:'absolute',
        padding:0,
        paddingBottom:'15PX',
        bottom:0,
        left:'45%',
        color:'#ffffff',
    },
    icon:{
        color:'#ffffff',
        width:'50px',
        height:'50px'
    }
  }));

const styles = {
    bounce: {
      animation: 'x 4s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

function DownArrow() {
    const classes=useStyles();
    return(
        <StyleRoot>
            <div style={styles.bounce} className={classes.root}>
                <IconButton>
                    <KeyboardArrowDownIcon className={classes.icon}/>
                </IconButton>
            </div>
        </StyleRoot>
    )
    
}

export default DownArrow;