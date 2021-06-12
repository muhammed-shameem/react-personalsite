import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
    color:props =>props.open?'#000000':'#ffffff',
    '&.MuiPaper-elevation4':{
        boxShadow:'none'
    },
    '&.MuiAppBar-root':{
        position:'fixed',
        height:'64px',
        [theme.breakpoints.down('sm')]:{
            backgroundColor:props =>props.open&&'#28282B',
            height:props =>props.open?'260px':'56px',
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
    justifyContent:'space-between',
    [theme.breakpoints.down('sm')]:{
        width:'70%',
    },
  },
  mobileMenus:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    color:'white',
    backgroundColor:'#28282B',
  },
  toolBar:{
    [theme.breakpoints.down('xs')]:{
      flexDirection:'column',
      alignItems:'flex-start'
    },
  }
}));

export default function ButtonAppBar() {
  const [open,SetOpen]=useState(false);
  const classes = useStyles({open});
  const toggleOpen=()=>SetOpen(!open);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
            <Hidden smUp>
                <IconButton 
                    edge="start"  
                    color="inherit" 
                    aria-label="menu"
                    onClick={toggleOpen}
                >
                    {open?
                      <CloseIcon style={{color:'white'}}/>
                      :
                      <MenuIcon className={classes.menuButton}/>
                    }
                </IconButton>
                <DarkLiteModeSwitch />
            </Hidden>
            <Hidden xsDown>
                {/* <Typography variant="h6" className={classes.title}>
                محمّد شميم 
                </Typography> */}
                <DarkLiteModeSwitch />
                <div className={classes.menus}>
                    <Button color="inherit">
                      <Link href='#home' color='inherit'>Home</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#about' color='inherit'>About</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Education</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Works</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Hobbies</Link>
                    </Button>
                    <Button color="inherit">
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
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Education</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Works</Link>
                    </Button>
                    <Button color="inherit">
                      <Link href='#' color='inherit'>Hobbies</Link>
                    </Button>
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
