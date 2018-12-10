import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/privateRoutes';
import PublicRoute from './Components/AuthRoutes/publicRoutes';
import AddEditMatch from './Components/Admin/matches/addEditMatch';

import Home from './Components/Home';
import SignIn from './Components/Signin';
import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/matches';
import AdminPlayers from './Components/Admin/players';

const Routes = (props) => {
  
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
        <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
        <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
        <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn} />
        <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
        
      </Switch>
    </Layout>
  )
}

export default Routes;
