import { makeStyles } from "@material-ui/core";

export const useStyles=makeStyles(theme=>({
    wrapper:{
        height:'223px',
        overflowY:'auto',
        overflowX:'hidden'
    },
    title:{
        marginTop:'2px',
        fontSize:'1.5rem',
        textDecoration:'underline'
    },
    value:{
        fontWeight:'bold'
    },
    mt:{
        marginTop:'5px'
    },
    btn:{
        paddingBottom:'0px !important',
        height:'auto !important'
    }
}))