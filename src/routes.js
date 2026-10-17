import './App.css';
import { Route, Switch } from 'react-router-dom';

import PreciousPuppies from 'pages/precious-puppies';
import { useState } from 'react';

const Routes = () => {
  // const [sellStatus] = useState('Sold out!');
  // const [sellStatus] = useState('MINT');
  // const [sellStatus] = useState("Coming Soon!");
  //const [sellStatus] = useState("Connect");
  return (
    <Switch>
      <Route exact path="/">
        {/* <PreciousPuppies sellStatus={sellStatus} /> */}
        <PreciousPuppies/>
      </Route>
    </Switch>
  );
};

export default Routes;
