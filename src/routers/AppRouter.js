import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'


import AddPet from '../pages/AddPet';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path ="/"
                    component={Home}
                    // isAuthenticated = {isLoggedIn}
                />
                <Route 
                    path ="/edit"
                    component={AddPet}
                    // isAuthenticated = {isLoggedIn}
                />
                <Route 
                    path ="/add"
                    component={AddPet}
                    // isAuthenticated = {isLoggedIn}
                />

                <Redirect to ="/" />
            </Switch>
        </Router>
    )
}

export default AppRouter
