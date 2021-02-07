import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom' ;
import Home from './pages/Home' ;
import UserSearch from './pages/UserSearch';
import Navbar from './core/components/Navbar' ;
const Routes =() =>(
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />

            </Route>
            <Route path="/UserSearch">
                <UserSearch />

            </Route>

        </Switch>
    </BrowserRouter>

);
export default Routes ;