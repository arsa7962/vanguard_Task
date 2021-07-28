import { Grid } from '@material-ui/core';
import Button from '../button/Button';

import TabPanel from '../tabPanel/TabPanel';
import Card from '../cards/Card';
import Carousel from '../carousel/Carousel';
import * as strings from '../../mockData/Strings';

import { useStyles } from './AccountDetailStyles';
import { Container } from '../../AppStyles';

export default function Details() {
  const classes = useStyles();
  return (
    <div className={classes.accountDetails}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Card title='Current Balance' amount={strings.currentBalance} />
            <Card
              title='Available'
              amount={strings.availableBalance}
              btnContent='View Transaction summary'
            />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <TabPanel />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.buttonWrapper}>
          {strings.tabPanelButtons.map((data) => {
            return (
              <Grid item xs={12} md={3} lg={3}>
                <Button content={data} className={classes.button} />
              </Grid>
            );
          })}
          <Grid item xs={12} md={3} lg={3}>
            <Button
              content='Manage your Account'
              color='white'
              className={classes.button}
              dropdown={true}
            />
          </Grid>
        </Grid>
        <Carousel />
      </Container>
    </div>
  );
}
