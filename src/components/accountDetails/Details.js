import { Grid } from '@material-ui/core';
import Button from '../button/Button';

import TabPanel from '../tabPanel/TabPanel';
import Card from '../cards/Card';
import * as strings from '../../mockData/Strings';

import { useStyles } from './AccountDetailStyles';
import { Container } from '../../AppStyles';

export default function Details() {
  const classes = useStyles();
  return (
    <div className={classes.accountDetails}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={4}>
            <Card
              title='Current Balance'
              amount={strings.currentBalance}
              className={classes.paper}
            />
            <Card
              title='Available'
              amount={strings.availableBalance}
              btnContent='View Transaction summary'
              className={classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <TabPanel />
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.buttonWrapper}>
          {strings.tabPanelButtons.map((data) => {
            return (
              <Grid item xs={12} md={3} lg={3}>
                <Button
                  content={data}
                  className={classes.button}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
