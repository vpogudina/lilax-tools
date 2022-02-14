import React from 'react';
import GetAgentLogs from './components/GetAgentLogs';
import IssuesDashboard from './components/IssuesDashboard';
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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/get-log-chunk">Get log chunks</Link>
            </li>
            <li>
              <Link to="/issues-dashboard">GitHub Issues dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/get-log-chunk" component={GetAgentLogs} />
          <Route path="/issues-dashboard" component={IssuesDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

