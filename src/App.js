import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import ExploreWatches from './pages/Home/ExploreWatches/ExploreWatches';
import Login from './pages/Login/Login';
import FeaturedWatches from './pages/Home/FeaturedWatches/FeaturedWatches';
import NotFound from './pages/NotFound/NotFound';
import AboutUs from './pages/Home/AboutUs/AboutUs';

function App() {
   return (
      <div className="App">
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
               <Route path="/about">
                  <AboutUs />
               </Route>
               <Route path="/login">
                  <Login />
               </Route>
               <Route path="*">
                  <NotFound />
               </Route>
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
