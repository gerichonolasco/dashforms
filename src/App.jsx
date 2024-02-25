import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './dashboard/Dashboard';
import ManageStakeholderfeedback from './manage/ManageStakeholderfeedback';
import LandingManage from './manage/LandingManage';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/managestakeholder" component={ManageStakeholderfeedback} />
          <Route path="/landingmanage" component={LandingManage} />

        </Switch>
      </Router>
  );
}

export default App;
