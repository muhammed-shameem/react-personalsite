import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as MoonIcon } from "../../../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../../../assets/icons/sunny.svg";

const useStyles = makeStyles((theme) => ({
    Icons:{
        width:14,
        height:14
    },
    container:{
        [theme.breakpoints.up('sm')]:{
        flexGrow: 1,
        marginLeft:'1%',
        },
        [theme.breakpoints.down('sm')]:{
            position:'absolute',
            right:12,
            top:12
        }
    }
}))

const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      //color: theme.palette.grey[500],
      color: '#000000',
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          //backgroundColor: theme.palette.primary.main,
          //borderColor: theme.palette.primary.main,
          backgroundColor:'#000000'
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

  function DarkIcon(props) {
    return (
      <SvgIcon {...props}>
        <MoonIcon />
      </SvgIcon>
    );
  }

  function LiteIcon(props) {
    return (
      <SvgIcon {...props} >
        <SunIcon />
      </SvgIcon>
    );
  }



function DarkLiteModeSwitch() {
    const [darkMode, setDarkMode] = React.useState(true);

    const classes=useStyles()
    const handleChange =()=>{
        setDarkMode(!darkMode);
    }
    return (
      <Typography component="div" className={classes.container}>
            <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>
                <LiteIcon className={classes.Icons}/>
            </Grid>
            <Grid item>
                <AntSwitch 
                    checked={darkMode} 
                    onChange={handleChange} 
                />    
            </Grid>
            <Grid item>
                <DarkIcon className={classes.Icons}/>
            </Grid>
            </Grid>
      </Typography> 
    );
    
}

export default DarkLiteModeSwitch;