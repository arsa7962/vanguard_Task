import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Select, MenuItem } from '@material-ui/core';
import { AccountCircle, Mail } from '@material-ui/icons';

import { Container } from '../../AppStyles';
import { useStyles, Text } from './AppbarStyles';
import { topNav } from '../../mockData/Strings';

export default function Appbar() {
  const classes = useStyles();
  const [user, setUser] = React.useState(topNav[1][0]);
  const handleChange = (event) => {
    setUser(event.target.value);
  };
  const SelectTab = () => {
    return (
      <Select
        labelId='demo-simple-select-filled-label'
        value={user}
        onChange={handleChange}
        className={classes.select}>
        {topNav[1].map((data) => {
          return (
            <MenuItem key={data} value={data}>
              {data}
            </MenuItem>
          );
        })}
      </Select>
    );
  };
  return (
    <AppBar component='div' className={classes.appBar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Link to='/' className={classes.link}>
            {' '}
            <Text>{topNav[0]}</Text>
          </Link>
          <SelectTab />
          <Mail className={classes.button} />
          <AccountCircle className={classes.button} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
