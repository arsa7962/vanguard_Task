import { Link } from 'react-router-dom';

import { AppBar, Typography } from '@material-ui/core';

import { welcomeText, welcomeTextLink } from '../../mockData/Strings';
import { Container } from '../../AppStyles';
import { useStyles } from './AlertStyles';

export default function Alert() {
  const classes = useStyles();
  return (
    <AppBar component='div' className={classes.appbar} elevation={0}>
      <Container>
        <Typography>
          {welcomeText}
          <Link to='/' className={classes.link}>{welcomeTextLink}</Link>
        </Typography>
      </Container>
    </AppBar>
  );
}
