import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root:{
        position:'absolute',
        padding:0,
        paddingBottom:'15PX',
        bottom:0,
        left:'45%',
        color:props=>props.darkMode?'#ffffff':'black',
    },
    icon:{
        color:props=>props.darkMode?'#ffffff':'black',
        width:'50px',
        height:'50px',
        "&:hover, &:focus": {
            opacity: "0.5",
            animationName: "$bounce",
            animationDuration: "1s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite"
          }
    },
    "@keyframes bounce": {
        "16.65%": {
          transform: "translateY(8px)"
        },
        "33.3%": {
          transform: "translateY(-6px)"
        },
        "49.95%": {
          transform: "translateY(4px)"
        },
        "66.6%": {
          transform: "translateY(-2px)"
        },
        "83.25%": {
          transform: "translateY(1px)"
        },
        "100%": {
          transform: "translateY(0)"
        }
      }
  }));

const styles = {
    bounce: {
      animation: 'x 4s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

function DownArrow({targetDiv,darkMode}) {
    const classes=useStyles({darkMode});
    return(
        <StyleRoot>
            <div style={styles.bounce} className={classes.root}>
                <IconButton>
                    <Link href={`#${targetDiv}`} color='inherit'>
                        <KeyboardArrowDownIcon className={classes.icon}/>
                    </Link>
                </IconButton>
            </div>
        </StyleRoot>
    )
    
}

export default DownArrow;