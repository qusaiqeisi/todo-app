import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import SettingProvider from './context/settings.js';
import Header from './components/header/Header';
import ToDo from './components/todo/todo.js';
import SettingsForm from './components/settingsForm/SettingsForm.js';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <SettingProvider>
          <Route exact path='/settings' >
            <SettingsForm />
          </Route>
          <Route exact path='/'>
            <ToDo />
          </Route>
        </SettingProvider>
      </Switch>
    </Router>
  )
}

export default App