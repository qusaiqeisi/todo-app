import React from 'react';

import ToDo from './components/todo/todo.js';
import SettingProvider from './context/context .js';

export default class App extends React.Component {
  render() {
    return (
      <SettingProvider>
        <ToDo />
      </SettingProvider>
    );
  }
}
