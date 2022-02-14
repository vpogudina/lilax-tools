import React from 'react';
import GetAgentLogs from './components/GetAgentLogs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/get-log-chunk" component={GetAgentLogs} />
          <Route path="/" component={GetAgentLogs} />
        </Switch>
      </div>
    </Router>
  );
}

