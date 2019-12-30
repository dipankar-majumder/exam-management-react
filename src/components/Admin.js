import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useRouteMatch,
  Switch,
  Link,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';

import clsx from 'clsx';
import {
  makeStyles,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Grid,
  Paper,
  Box,
} from '@material-ui/core';
import {
  Menu,
  Notifications,
  ChevronLeft,
  Assignment,
  Dashboard as DashboardIcon,
  ShoppingCart,
  People,
  BarChart,
  Layers,
  ExitToApp,
} from '@material-ui/icons';

import { PrivateRoute } from './AuthAdmin';
import Dashboard from './Dashboard';
import Exams from './Exams';
import Teachers from './Teachers';

import { changeAppBarTitle } from '../store/actions/stateActions';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: { display: 'flex' },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  link: { color: 'inherit', textDecoration: 'none' },
}));

const Admin = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { path, url } = useRouteMatch();
  const history = useHistory();

  const state = useSelector(state => state.stateReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeAppBarTitle('Admin Panel'));
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='absolute'
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden,
            )}
          >
            <Menu />
          </IconButton>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={clsx(classes.title, 'title')}
          >
            {state.appBarTitle}
          </Typography>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <Notifications />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link
            to={`${url}/dashboard`}
            color='inherit'
            className={classes.link}
          >
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItem>
          </Link>
          <Link to={`${url}/exams`} color='inherit' className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary='Exams' />
            </ListItem>
          </Link>
          <Link to={`${url}/teachers`} color='inherit' className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary='Teachers' />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary='Orders' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary='Customers' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary='Reports' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary='Integrations' />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              window.alert('Sign Out');
              // fakeAuth.signout(() => {
              //   history.push('/admin');
              // });
            }}
          >
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary='Log Out' />
          </ListItem>
          {/* {secondaryListItems} */}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            <Switch>
              <Route exact path={`${path}`}>
                <center>Admin Panel</center>
              </Route>
              <Route path={`${path}/dashboard`}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper className={fixedHeightPaper}>{/* <Chart /> */}</Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper className={fixedHeightPaper}>
                    {/* <Deposits /> */}
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Paper className={classes.paper}>{/* <Orders /> */}</Paper>
                </Grid>
              </Route>
              <Route path={`${path}/dashboard`}>
                <Dashboard />
              </Route>
              <Route path={`${path}/exams`}>
                <Exams />
              </Route>
              <Route path={`${path}/teachers`}>
                <Teachers />
              </Route>
            </Switch>
          </Grid>
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
      </main>
    </div>
  );
};

export default Admin;
