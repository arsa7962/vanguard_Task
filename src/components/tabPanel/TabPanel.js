import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TabData from '../tabPanelData/TabData';
import { tabPanelData } from '../../mockData/Strings';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    backgroundColor: '#fff',
    color: '#505050',
    fontWeight: 'bolder',
    borderBottom:'1px solid #d9d9d9',
    overflow: 'auto !important',
  },
  width: {
    backgroundColor:'var(--white)',
    border:'1px solid #d9d9d9',
    minWidth: 'auto',
    paddingLeft: '20px',
    '& .selected': {
      backgroundColor: 'red !important',
    },
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
        <Tabs
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
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
