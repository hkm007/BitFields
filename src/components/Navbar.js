import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#000000' }}>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    BitFields
                </Typography>
                <Button onClick={() => alert('Login')} color="primary" variant="contained" style={{marginRight: '5px'}}>Login</Button>
                <Button onClick={() => alert('SignUp')} color="secondary" variant="contained">Signup</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));
  

export default Navbar;
