import React from 'react';
import { bounceInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        position:'absolute',
        padding:0,
        top:'50%',
        left:'10%',
        color:'#ffffff',
    },
  }));

  const styles = {
    bounce: {
      animation: 'x 4s',
      animationName: Radium.keyframes(bounceInDown, 'bounce')
    }
  }

function TextAnimation() {
    const classes=useStyles();

    return(
        <StyleRoot>
            <div style={styles.bounce} className={classes.root}>
                Muhammed Shameem
            </div>
        </StyleRoot>
    )
}

export default TextAnimation;