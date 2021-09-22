import React, { useContext } from 'react';
import { If, Else, Then } from 'react-if';
import { AuthContext } from './context/auth';
import SettingProvider from './context/settings.js';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import ToDo from './components/todo/todo.js';
import Header from './components/header/Header';
import SettingsForm from './components/settingsForm/SettingsForm';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';

const EditLink = () => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};

const DeleteLink = () => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};


function App() {

  const contextType = useContext(AuthContext);


  return (
    <>
      <Header />
      <If condition={contextType.loggedIn}>
        <Then>
          <Router>
            <Switch>
              <SettingProvider>
                <Route exact path='/settings' >
                  <SettingsForm />
                </Route>
                <Route exact path='/'>
                  <EditLink />
                  <DeleteLink />
                  <ToDo />
                </Route>
              </SettingProvider>
            </Switch>
          </Router>
        </Then>
        <Else>
          <div></div>
        </Else>
      </If>
    </>
  )
}

export default App


