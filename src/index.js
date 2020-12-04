import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HookForm from './HookForm'
import FormikForm from './FormikForm'
import HookForm2 from './HookForm2'
import FormikForm2 from './FormikForm2'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/hookform">react hook form</Link>
            </li>
            <li>
              <Link to="/formik">formik</Link>
            </li>
            <li>
              <Link to="/hookform2">react hook form with yup</Link>
            </li>
            <li>
              <Link to="/formik2">formik with yup</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/hookform">
            <HookForm />
          </Route>
          <Route path="/formik">
            <FormikForm/>
          </Route>
          <Route path="/hookform2">
            <HookForm2 />
          </Route>
          <Route path="/formik2">
            <FormikForm2/>
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
