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
        <Grid container spacing={2} className={classes.mt}>
          {data.userData.map((items) => {
            return (
              <Grid item sm={4} xs={6}>
                <Typography>{items.title}</Typography>
                <Typography className={classes.value}>{items.value}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Divider className={classes.divider}/>
      <Button color='white' align='left' content={data.btnContent} className={classes.btn}/>
    </>
  );
}
