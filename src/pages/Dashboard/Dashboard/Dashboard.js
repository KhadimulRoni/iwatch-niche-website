import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ReviewsIcon from '@mui/icons-material/Reviews';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Button } from '@mui/material';
import ManageOrders from '../../Home/Orders/ManageOrders/ManageOrders';
import Orders from '../../Home/Orders/Orders/Orders';
import AddWatches from '../AddWatches/AddWatches';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 230;

function Dashboard(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const { user, logOut, admin } = useAuth();
   let { path, url } = useRouteMatch();

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const drawer = (
      <div
         style={{
            color: 'yellow',
            backgroundColor: '#353530',
            height: '100vh',
         }}
      >
         <Toolbar />
         <Divider />

         <Link to="/home">
            <Button className="text-white" color="inherit">
               HOME
            </Button>
         </Link>

         <Divider />
         <List className="p-3 ">
            {!admin && (
               <Box>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                     <ShoppingCartIcon />
                     <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/orders`}
                     >
                        <Button className="text-white" color="inherit">
                           MY ORDERS
                        </Button>
                     </Link>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                     <PaymentIcon />
                     <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/payment`}
                     >
                        <Button className="text-white" color="inherit">
                           PAYMENT
                        </Button>
                     </Link>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'center' }}>
                     <ReviewsIcon />
                     <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/review`}
                     >
                        <Button className="text-white" color="inherit">
                           REVIEW
                        </Button>
                     </Link>
                  </li>
               </Box>
            )}
            {admin && (
               <Box>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                     <AddCircleIcon />
                     <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/addWatch`}
                     >
                        <Button className="text-white" color="inherit">
                           Add Watch
                        </Button>
                     </Link>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                     <PersonAddAlt1Icon />
                     <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/makeAdmin`}
                     >
                        <Button className="text-white" color="inherit">
                           Make Admin
                        </Button>
                     </Link>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                     <ManageAccountsIcon />
                     <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/manageProducts`}
                     >
                        <Button className="text-white" color="inherit">
                           Manage Products
                        </Button>
                     </Link>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                     <ManageAccountsIcon />
                     <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/manageOrders`}
                     >
                        <Button className="text-white" color="inherit">
                           Manage All Orders
                        </Button>
                     </Link>
                  </li>
               </Box>
            )}
         </List>
         <List>
            {user?.email ? (
               <Button onClick={logOut} className="m-2" variant="contained">
                  Logout
               </Button>
            ) : (
               <Link to="/home" className="text-warning"></Link>
            )}
         </List>
      </div>
   );

   const container =
      window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar
            style={{ backgroundColor: '#262626' }}
            position="fixed"
            sx={{
               width: { sm: `calc(100% - ${drawerWidth}px)` },
               ml: { sm: `${drawerWidth}px` },
            }}
         >
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h5" noWrap component="div">
                  Dashboard
               </Typography>
            </Toolbar>
         </AppBar>
         <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
         >
            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>
            <Drawer
               variant="permanent"
               sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                  },
               }}
               open
            >
               {drawer}
            </Drawer>
         </Box>
         <Box
            style={{ backgroundColor: '#1c1b1f', height: '100hv' }}
            component="main"
            sx={{
               flexGrow: 1,
               p: 3,
               width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
         >
            <Toolbar />

            <Switch>
               <Route path={`${path}/orders`}>
                  <Orders></Orders>
               </Route>
               <Route path={`${path}/payment`}>
                  <Payment></Payment>
               </Route>
               <Route path={`${path}/review`}>
                  <Review></Review>
               </Route>
               <Route path={`${path}/addWatch`}>
                  <AddWatches></AddWatches>
               </Route>
               <Route path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
               </Route>
               <Route path={`${path}/manageOrders`}>
                  <ManageOrders></ManageOrders>
               </Route>
               <Route path={`${path}/manageProducts`}>
                  <ManageProducts></ManageProducts>
               </Route>
            </Switch>
         </Box>
      </Box>
   );
}

Dashboard.propTypes = {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
   window: PropTypes.func,
};

export default Dashboard;
