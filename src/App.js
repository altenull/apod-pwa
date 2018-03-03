import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { GalleryActions } from 'store/actionCreators';
import { Home, Gallery } from 'pages';
import AppShell from './AppShell';
import 'semantic-ui-css/semantic.min.css';
import IndexedDB from 'lib/IndexedDB';

// 0. AppShell.. Header & Drawer
// 1. contents.. Home  (+ Dimmer when network connection loss)
// 2. contents.. Gallery
class App extends Component {
  componentWillMount() {
    IndexedDB.init().then(() => {
      IndexedDB.getAllAPODs().then((findResult) => {
        GalleryActions.setAPODList(findResult);
      });
    });
  }

  componentWillUnmount() {
    IndexedDB.close();
  }

  render() {
    return (
      <React.Fragment>
        <AppShell>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/gallery' component={Gallery} />
          </Switch>
        </AppShell>
      </React.Fragment>
    );
  }
}

export default App;