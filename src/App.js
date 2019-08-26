import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import HotDog from './components/HotDog/HotDog';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/orders" component={Orders}/>
          <Route path="/" exact component={HotDog}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
