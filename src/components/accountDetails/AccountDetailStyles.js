import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  accountDetails:{
    margin:'30px 0px',
    backgroundColor: 'var(--white)',
    padding:'50px 0px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttonWrapper:{
    '&:nth-type(4) button' :{
        backgroundColor:'#fff',
        color:'var(--deep-torquoise)'
    }
  },
  button:{
      margin:'0px 10px',
      
  }
}));
