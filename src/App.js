import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import ExploreWatches from './pages/Home/ExploreWatches/ExploreWatches';
import Login from './pages/Login/Login';
import FeaturedWatches from './pages/Home/FeaturedWatches/FeaturedWatches';
import NotFound from './pages/NotFound/NotFound';
import AboutUs from './pages/Home/AboutUs/AboutUs';

import PlaceOrders from './pages/Home/PlaceOrder/PlaceOrders';
import Orders from './pages/Home/Orders/Orders/Orders';
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Registration from './pages/Login/Registration';

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
                  <Route path="/featuredWatches">
                     <FeaturedWatches />
                  </Route>
                  <PrivateRoute path="/placeOrder/:_id">
                     <PlaceOrders></PlaceOrders>
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
