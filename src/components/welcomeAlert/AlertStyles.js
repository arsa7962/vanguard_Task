import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
 appbar:{
     backgroundColor:'var(--white-two)',
     marginTop:'120px',
     borderBottom:'solid 2px #006778;',
     color:'#505050',
     minHeight:'44px',
     padding:'10px 0px',
     boxSizing:'border-box',
     zIndex:999
 },
 link:{
     marginLeft:'10px',
     color:'var(--deep-torquoise)'
 }
}))