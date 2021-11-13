import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import ExploreWatches from './pages/Home/ExploreWatches/ExploreWatches';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import AboutUs from './pages/Home/AboutUs/AboutUs';
import PlaceOrders from './pages/Home/PlaceOrder/PlaceOrders';
import Orders from './pages/Home/Orders/Orders/Orders';
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Registration from './pages/Login/Registration';
import AddWatches from './pages/Dashboard/AddWatches/AddWatches';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import ManageOrders from './pages/Home/Orders/ManageOrders/ManageOrders';

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <BrowserRouter>
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route path="/home">
                     <Home />
                  </Route>
                  <Route path="/exploreWatches">
                     <ExploreWatches />
                  </Route>
                  <PrivateRoute path="/addWatch">
                     <AddWatches />
                  </PrivateRoute>
                  <PrivateRoute path="/exploreWatch/:id">
                     <PlaceOrders></PlaceOrders>
                  </PrivateRoute>
                  <PrivateRoute path="/manageOrders">
                     <ManageOrders></ManageOrders>
                  </PrivateRoute>
                  <PrivateRoute path="/dashboard">
                     <Dashboard></Dashboard>
                  </PrivateRoute>
                  <PrivateRoute path="/orders">
                     <Orders></Orders>
                  </PrivateRoute>
                  <Route path="/about">
                     <AboutUs />
                  </Route>
                  <Route path="/registration">
                     <Registration />
                  </Route>
                  <Route path="/login">
                     <Login />
                  </Route>
                  <Route path="*">
                     <NotFound />
                  </Route>
               </Switch>
            </BrowserRouter>
         </AuthProvider>
      </div>
   );
}

export default App;
