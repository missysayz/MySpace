import React, { Fragment } from "react";
import Home from "./components/Home.js";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FetchUser from "./components/FetchUser";
import MyProfiles from "./components/MyProfiles";
import MyProfileForm from './components/MyProfileForm';
import MyFriends from "./components/MyFriends";
// import AuthProvider from "./providers/AuthProvider";

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <Fragment>
    <div>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute exact path='/profile/my-friends' component={MyFriends} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/MyProfileForm' component={MyProfileForm} />
            <ProtectedRoute exact path='/my_profiles' component={MyProfiles} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </div>
    ;
  </Fragment>
);

export default App;
