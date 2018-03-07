import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BaseActions, GalleryActions } from 'store/actionCreators';
import { Home, Gallery } from 'pages';
import AppShell from './AppShell';
import 'semantic-ui-css/semantic.min.css';
import IndexedDB from 'lib/IndexedDB';
import ReactGA from 'react-ga';

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

  componentDidMount() {
    ReactGA.set({
      page: window.location.pathname + window.location.search
    });
    ReactGA.pageview(window.location.pathname + window.location.search);

    window.addEventListener('offline', () => {
      BaseActions.changeNetworkStatus(window.navigator.onLine);
    });
    window.addEventListener('online', () => {
      BaseActions.changeNetworkStatus(window.navigator.onLine);
    });
  }

  render() {
    return (
      <AppShell>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/gallery' component={Gallery} />
        </Switch>
      </AppShell>
    );
  }
}

export default App;