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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
            backgroundColor:props =>props.open&&'#ffffff',
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
    color:'#000000',
  },
  toolBar:{
    [theme.breakpoints.down('xs')]:{
      flexDirection:'column',
      alignItems:'flex-start'
    }
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
                      <CloseIcon />
                      :
                      <MenuIcon className={classes.menuButton}/>
                    }
                </IconButton>
            </Hidden>
            <Hidden xsDown>
                <Typography variant="h6" className={classes.title}>
                محمّد شميم 
                </Typography>
                <div className={classes.menus}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Education</Button>
                    <Button color="inherit">Works</Button>
                    <Button color="inherit">Hobbies</Button>
                    <Button color="inherit">Contact</Button>
                </div>
            </Hidden>
            {open&&
                <div className={classes.mobileMenus}>
                  <Button color="inherit">Home</Button>
                  <Button color="inherit">About</Button>
                  <Button color="inherit">Education</Button>
                  <Button color="inherit">Works</Button>
                  <Button color="inherit">Hobbies</Button>
                  <Button color="inherit">Contact</Button>
                </div>
              }
        </Toolbar>
      </AppBar>
    </div>
  );
}
