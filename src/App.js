import React, { Component } from 'react';
import './styles/App.scss';
import ContactPage from './Pages/ContactPage/ContactPage.js';
import HomePage from './Pages/HomePage/HomePage.js';
import ContactDetailsPage from './Pages/ContactDetailsPage/ContactDetailsPage.js';
import StatisticPage from './Pages/StatisticsPage/StatisticPage.js';
import ContactEditPage from './Pages/ContactEditPage/ContactEditPage.js'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App container">

        <Router>
          <nav>
            <NavLink activeClassName="active-link" exact to="/">Home</NavLink>|
            <NavLink activeClassName="active-link" to="/contacts">Contacts</NavLink>|
            <NavLink activeClassName="active-link" to="/statistic">Statistics</NavLink>
          </nav>
          <Switch>
            <Route path="/contact/:id?/edit" component={ContactEditPage} />
            <Route path="/contact/:id" component={ContactDetailsPage} />
            <Route path="/contacts" component={ContactPage} />
            <Route path="/statistic" component={StatisticPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
