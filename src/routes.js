import './App.css';
import { Route, Switch } from 'react-router-dom';

import PreciousPuppies from 'pages/precious-puppies';
import { useState } from 'react';

const Routes = () => {
  // const [sellStatus] = useState('Sold out!');
  // const [sellStatus] = useState('MINT');
  const [sellStatus] = useState("Coming Soon!");
  return (
    <Switch>
      <Route exact path="/">
        <PreciousPuppies sellStatus={sellStatus} />
      </Route>
    </Switch>
  );
};

export default Routes;
