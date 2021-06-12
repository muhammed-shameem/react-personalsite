import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import {
  DarkLiteModeSwitch
} from '../../elements';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%'
  },
  appBar:{
    color:props =>props.open?
                            props.darkMode?'#000000':'#ffffff'
                            :props.darkMode?'#ffffff':'#000000',
    '&.MuiPaper-elevation4':{
        boxShadow:'none'
    },
    '&.MuiAppBar-root':{
        position:'fixed',
        height:'64px',
        [theme.breakpoints.down('sm')]:{
            backgroundColor:props =>props.open?
                                          props.darkMode?'#28282B':'#ffffff'
                                          :!props.darkMode&&'inherit',
            height:props =>props.open?'160px':'56px',
        }
    }
  },
  menuButton: {
    
  },
  title: {
    flexGrow: 1,
    fontWeight:'bold',
    marginLeft:'1%',
    fontSize:'1.6rem',
  },
  menus:{
    width:'60%',
    display:'flex',
    justifyContent:'flex-end',
    [theme.breakpoints.down('sm')]:{
        width:'70%',
    },
  },
  mobileMenus:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    color:props =>props.darkMode?'white':'#000000',
    backgroundColor:props =>props.darkMode?'#28282B':'#ffffff',
  },
  toolBar:{
    [theme.breakpoints.down('xs')]:{
      flexDirection:'column',
      alignItems:'flex-start'
    },
  },
  CloseIcon:{
    color:props=>props.darkMode?'white':'black'
  },
  menuItem:{
    marginRight:30,
  }
}));

export default function ButtonAppBar({darkMode,setCookie}) {
  const [open,SetOpen]=useState(false);
  const classes = useStyles({open,darkMode});
  const toggleOpen=()=>SetOpen(!open);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
            <Hidden smUp>
                <DarkLiteModeSwitch darkMode={darkMode} setCookie={setCookie}/>
                <IconButton 
                    edge="start"  
                    color="inherit" 
                    aria-label="menu"
                    onClick={toggleOpen}
                >
                    {open?
                      <CloseIcon className={classes.CloseIcon}/>
                      :
                      <MenuIcon className={classes.menuButton}/>
                    }
                </IconButton>
            </Hidden>
            <Hidden xsDown>
                {/* <Typography variant="h6" className={classes.title}>
                محمّد شميم 
                </Typography> */}
                <DarkLiteModeSwitch darkMode={darkMode} setCookie={setCookie}/>
                <div className={classes.menus}>
                    <Button color="inherit" className={classes.menuItem}>
                      <Link href='#home' color='inherit'>Home</Link>
                    </Button>
                    <Button color="inherit" className={classes.menuItem}>
                      <Link href='#about' color='inherit'>About</Link>
                    </Button>
                    {/* <Button color="inherit">
                      <Link href='#' color='inherit'>Education</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Works</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Hobbies</Link>
                    </Button> */}
                    <Button color="inherit" className={classes.menuItem}>
                      <Link href='#' color='inherit'>Contact</Link>
                    </Button>
                </div>
            </Hidden>
            {open&&
                <div className={classes.mobileMenus}>
                    <Button color="inherit">
                      <Link href='#home' color='inherit'>Home</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#about' color='inherit'>About</Link>
                    </Button>
                    {/* <Button color="inherit">
                      <Link href='#' color='inherit'>Education</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Works</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Hobbies</Link>
                    </Button> */}
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Contact</Link>
                    </Button>
                </div>
              }
        </Toolbar>
      </AppBar>
    </div>
  );
}
