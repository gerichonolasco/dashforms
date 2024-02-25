import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ManageStakeholderfeedback from '../manage/ManageStakeholderfeedback.jsx';
import ManageIAEval from '../manage/ManageIAEval.jsx';
import ManageQMSEval from '../manage/ManageQMSEval.jsx';

function Sidebar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="fixed top-50 left-0 w-52 h-full bg-black p-5 lg:w-30 lg:translate-x-0">
      <Router>
        <div>
          <nav className="space-y-1">
            <Link to="/" onClick={toggleDropdown} className="block p-2 font-bold no-underline text-yellow-500">MANAGE FORMS</Link>
            {showDropdown && (
              <ul className="list-none p-2 bg-black border border-black mt-2">
                <li><Link to="../manage/ManageStakeholderfeedback" className="block p-1 text-yellow-500">Stakeholder's Feedback</Link></li>
                <li><Link to="../manage/ManageIAEval" className="block p-1 text-yellow-500">Internal Audit Evaluation</Link></li>
                <li><Link to="../manage/ManageQMSEval" className="block p-1 text-yellow-500">QMS Evaluation</Link></li>
              </ul>
            )}
          </nav>
          <div className="main-content">
            <Switch>
              <Route path="../manage/ManageStakeholderfeedback" component={ManageStakeholderfeedback} />
              <Route path="../manage/ManageIAEval" component={ManageIAEval} />
              <Route path="../manage/ManageQMSEval" component={ManageQMSEval} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Sidebar;
