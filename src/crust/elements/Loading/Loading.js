import React from 'react';
import ReactLoading from 'react-loading';
import {  makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    loadingContainer:{
      width:'100%',
      height:'100%',
      backgroundColor:'black',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      position:'absolute'
    },
    
  }));
 
function Loading ({ type, color ,className })  {

    const classes = useStyles();

    return(
        <div className={classes.loadingContainer}>
            <ReactLoading 
                type={type} 
                color={color} 
                height={'20%'} 
                width={'20%'} 
                className={className} 
            />
        </div>
    )
};
 
export default Loading;