import { Divider, Grid, Typography } from '@material-ui/core';
import Button from '../button/Button';
import { useStyles } from './TabDataStyles';

export default function TabDataStyles({ data }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Typography variant='h4' className={classes.title} color='secondary'>
          {data.title}
        </Typography>
        <Typography variant='subtitle1'>{data.content}</Typography>
        <Typography className={classes.mt}>
          Username:
          <Typography variant='span' className={classes.value}>
            {data.Username}
          </Typography>
        </Typography>
        <Grid container spacing={2} className={classes.mt}>
          {data.userData.map((items) => {
            return (
              <Grid item xs={4}>
                <Typography>{items.title}</Typography>
                <Typography className={classes.value}>{items.value}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Divider/>
      <Button color='#fff' align='left' content={data.btnContent} className={classes.btn}/>
    </>
  );
}
