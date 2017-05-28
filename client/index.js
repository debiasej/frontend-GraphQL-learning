import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from "./components/app";
import SongList from './components/song_list';
import SongCreate from './components/song_create';
import SongDetail from './components/song_detail';

// ApolloClient assumes that server had defined 'graphql' route
const client = new ApolloClient({
  // Takes every single piece of data from server and identify them inside the apollo store
  // http://dev.apollodata.com/react/cache-updates.html
  dataIdFromObject: object => object.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
