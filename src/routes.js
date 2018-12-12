import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/privateRoutes';
import PublicRoute from './Components/AuthRoutes/publicRoutes';
import AddEditMatch from './Components/Admin/matches/addEditMatch';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';

import Home from './Components/Home';
import SignIn from './Components/Signin';
import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/matches';
import AdminPlayers from './Components/Admin/players';
import AddEditPlayers from './Components/Admin/players/addEditPlayers';

const Routes = (props) => {
  
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
        <PrivateRoute {...props} path="/admin_players/add_player" exact component={AddEditPlayers}/>
        <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
        <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
        <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
        <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn} />
        <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches} />
        <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam} />
        <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
        
      </Switch>
    </Layout>
  )
}

export default Routes;
