import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import SvgIcon from '@material-ui/core/SvgIcon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';
import CoverPhoto from '../../../assets/images/map.jpg';


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
      position:"absolute",
      opacity:1,
      color:props=>props.darkMode?'#ffffff':'black',
      width:'100%',
      height:'35%',
      marginTop:'10%',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around',
      fontFamily:'Lucida Console',
      fontSize:'25px',
      fontWeight:'bold',
      [theme.breakpoints.down('sm')]:{
          flexDirection:'column',
        marginTop:'30%',
        fontSize:'20px',
        height:'20%',
        alignItems:'center',
        justifyContent:'space-around'
      }
    },
    box:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        [theme.breakpoints.down('sm')]:{
            marginTop:'15%'
        }
    },
    Icon:{
        width:30,
        height:30,
        marginBottom:10,
        [theme.breakpoints.down('sm')]:{
            width:25,
            height:25,
        }
    },
    firstText:{
        marginBottom:15,
    },
    lastText:{
        fontSize:'22px',
        fontWeight:'bold', 
        color:'inherit',
        textDecoration:'none',
        [theme.breakpoints.down('sm')]:{
            fontSize:'17px',
        },
        "& a":{
            cursor:'pointer'
        }
    },
    footer:{
        position:'absolute',
        bottom:5,
        fontFamily:'Oswald, sans-serif',
        width:'100%',
        height:100,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-end',
        background:props=>props.darkMode? 'rgba(0, 0, 0, 0.5)':'rgba(0,0,0.5,0)',
        color:props=>props.darkMode?'white':'black',
        [theme.breakpoints.down('sm')]:{
            bottom:20,
        }
    },
    copyright:{
        marginBottom:10,
        fontSize:10
    },
    footerIcons:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    }
    
  }));

  function LinkIcon(props) {
    return (
        <Link 
            href={props.to} 
            target="_blank" 
            style={{textDecoration:'none',marginLeft:5,marginRight:5,color:'inherit'}}
        >
            <SvgIcon>
                {props.component}
            </SvgIcon>
      </Link>
    );
  }


function ContactSection({darkMode}) {
    const classes=useStyles({darkMode});

    const year= new Date().getFullYear();
    return(
        <div className={classes.container} id='contact'>
          <div className={classes.bg}></div>
          <div className={classes.textShow}>
                <div className={classes.box}>
                  <EmailIcon className={classes.Icon}/>
                  <div className={classes.firstText}>Email</div>
                  <a href='mailto:muhammadshami977@gmail.com' className={classes.lastText}>
                      muhammadshami977@gmail.com
                  </a>
                </div>

                <div className={classes.box}>
                  <LocationOnIcon className={classes.Icon}/>
                  <div className={classes.firstText}>Address</div>
                  <div className={classes.lastText}>
                    Pattambi, Kerala, India
                  </div>
                </div>

                <div className={classes.box}>
                  <PhoneCallbackIcon className={classes.Icon}/>
                  <div className={classes.firstText}>Phone</div>
                  <div className={classes.lastText}>
                    +91 6282 986099
                  </div>
                </div>

          </div>
          <div className={classes.footer}>
            <div className={classes.footerIcons}>
                <LinkIcon 
                    to='https://www.instagram.com/shami__shaz/?hl=en'
                    component={<InstagramIcon />}
                />
                <LinkIcon 
                    to='https://www.linkedin.com/in/muhammed-shameem-s/'
                    component={<LinkedInIcon />}
                />
                <LinkIcon 
                    to='https://gitlab.com/users/shameem786/projects'
                    component={<GitHubIcon />}
                />
            </div>
            <div className={classes.copyright}>
                Muhammed Shameem © {year} All Rights Reserved.     
            </div>
          </div>
        </div>
    )
}

export default ContactSection;