import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TabData from '../tabPanelData/TabData';
import { tabPanelData } from '../../mockData/Strings';

const StyledTabs = withStyles({
  indicator: {
    top: 0,
    height: '4px',
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: '364px',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  appbar: {
    fontSize: 'var(--bodyFont2)',
    backgroundColor: '#fff',
    color: '#505050',
    fontWeight: 'bolder',
    borderBottom: '1px solid #d9d9d9',
    overflow: 'auto !important',
    height: '55px',
  },
  width: {
    backgroundColor: 'var(--white-two)',
    opacity: 1,
    borderLeft: '1px solid #d9d9d9',
    borderRight: '1px solid #d9d9d9',
    borderTop: '4px solid rgba(0, 103, 120, 0.1)',
    textTransform: 'capitalize',
    minWidth: 'auto',
    height: '56px',
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appbar} elevation={0}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'>
          <Tab className={classes.width} label='Grants' {...a11yProps(0)} />
          <Tab
            className={classes.width}
            label='Contributions(1890)'
            {...a11yProps(1)}
          />
          <Tab className={classes.width} label='Exchange' {...a11yProps(2)} />
          <Tab
            className={classes.width}
            label='Other Transactions'
            {...a11yProps(3)}
          />
        </StyledTabs>
      </AppBar>
      <TabPanel className={classes.panel} value={value} index={0}>
        <TabData data={tabPanelData[1]} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabData data={tabPanelData[0]} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabData data={tabPanelData[2]} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TabData data={tabPanelData[0]} />
      </TabPanel>
    </div>
  );
}
