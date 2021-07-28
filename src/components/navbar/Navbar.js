import React from 'react';

import { AppBar, Tab, Tabs, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import * as strings from '../../mockData/Strings';
import { Container } from '../../AppStyles';
import { useStyles } from './NavbarStyles';
import logo from '../../images/vcep-logo@3x.png';
import Menubar from '../menuBar/Menubar';

import './NavbarCss.css';

const StyledTabs = withStyles({
  indicator: {
    height: '4px',
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default function Appbar() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const menubarClass = menuOpen
    ? `${classes.icon}  hamburger open`
    : `${classes.icon}  hamburger`;
  return (
    <AppBar component='div' className={classes.appbar} elevation={0}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <img className={classes.image} src={logo} alt='Logo' />
          <StyledTabs
            value={value}
            onChange={handleChange}
            className={classes.list}
            aria-label='simple tabs example'>
            {strings.subNav.map((data) => (
              <Tab
                className={classes.listItem}
                label={data.title}
                key={data.title}></Tab>
            ))}
          </StyledTabs>
          <div class={menubarClass} onClick={() => setMenuOpen(!menuOpen)}>
            <div className='hamburger-btn'></div>
          </div>
        </Toolbar>
      </Container>
      {menuOpen && <Menubar />}
    </AppBar>
  );
}
