import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/posts/:id">
            <PostDetail />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
          <Route path="/posts">
            <PostList />
          </Route>
        </Switch>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
