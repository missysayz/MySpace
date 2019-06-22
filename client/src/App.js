import React, { Fragment } from "react";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from "./components/FetchUser";
import MyProfiles from "./components/MyProfiles";
import Profile from './components/Profile'
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";

// import MyProfileForm from './components/MyProfileForm';
// import MyFriends from "./components/MyFriends";
// import AuthProvider from "./providers/AuthProvider";

const App = () => (
  <Fragment>

    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/my_profiles' component={MyProfiles} />
          <ProtectedRoute exact path='/profiles' component={Profile} />
          {/* <ProtectedRoute exact path="/friends/:id" component={Friend} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          {/* <Route exact path='/MyProfileForm' component={MyProfileForm} /> */}
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
);

export default App;
