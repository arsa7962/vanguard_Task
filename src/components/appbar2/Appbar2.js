import { AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import * as strings from '../../mockData/Strings';
import { Container } from '../../AppStyles';
import { useStyles } from './AppBar2Styles';
import logo from '../../images/vcep-logo@3x.png';

export default function Appbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <img className={classes.image} src={logo} alt='Logo' />
          <div className={classes.list}>
            {strings.subNav.map((data) => (
              <div className={classes.listItem} key={data.title}>{data.title}</div>
            ))}
          </div>
          <MenuIcon className={classes.icon}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
