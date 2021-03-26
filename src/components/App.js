import React from "react";
import {Switch, Route} from "react-router-dom"
// import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Compare from "./Compare"
import History from "./History"
import PageNotFound from "./PageNotFound"
import Avatar from "./Avatar";
import Footer from "./Layout/Footer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const App = props => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}> 
        <img
              style={{ flex: 'center' }}
              src="https://lh3.googleusercontent.com/proxy/tbPS1Z0qlDa6e8Qxxe-_ex79chHccJF7MDOUlpq7_kDakwRN9Wh1ydZDTQxrqBxhL1JoaWWNP1hZXuPRt0k9aOe2FQ8UF_E"
              alt="logo"
              width="100px"
              height="50px"
              
        />
      </div>
      <Divider />
      <List>
        {[{title: "Compare", url: "/"}, {title: "History", url: "/history"}].map(({title, url}, index) => (
          <ListItem button key={title}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={title} onClick={() => {props.history.push(url)}}/>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            ariaLabel="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Comparator App
          </Typography>

          <Grid container justify="flex-end">
            {/* <img
              style={{ borderRadius: "20px" }}
              src="https://i.ya-webdesign.com/images/avatar-png-1.png"
              alt="profile pics"
              width="30px"
              height="30px"
            /> */}
            {<Avatar />}
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} ariaLabel="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

      <Switch>

       <Route path="/" exact component={Compare} />
       <Route path="/history" component={History} />
       <Route component={PageNotFound} />
      </Switch>
      <button>Logout</button>
      <div>
        
      
      </div>
      <Footer />
      </main>
    </div>
  );
};



export default App;