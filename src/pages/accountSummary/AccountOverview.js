import { Breadcrumbs, Link, Typography, Grid } from '@material-ui/core';

import AccountDetails from '../../components/accountDetails/Details';
import Button from '../../components/button/Button';
import * as strings from '../../mockData/Strings';

import { useStyles } from './AccountOverviewStyles';
import { Container } from '../../AppStyles';

const Breadcrumb = () => {
  return (
    <Breadcrumbs separator='>' aria-label='breadcrumb'>
      {strings.breadcrumb.map((data) => {
        return (
          <Link color='inherit' key={data} href='/'>
            {data}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default function AccountOverview() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Breadcrumb />
        <Typography variant='h4'>Account Overview</Typography>
        <Typography variant='h6' className={classes.bold}>
          The Church Fund - A1050919
        </Typography>
        <Typography variant='h6'>Balances as of 12/12/2012</Typography>
      </Container>
      <AccountDetails className={classes.accountDetails} />
      <Container>
        <Grid container spacing={3} className={classes.btn}>
          <Grid item md={6} xs={12}>
            <Button content={strings.buttons[0]} width='100%' />
          </Grid>
          <Grid item md={6} xs={12}>
            <Button content={strings.buttons[1]} width='100%' />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
