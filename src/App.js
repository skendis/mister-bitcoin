import React, { Component } from 'react';
import './styles/App.scss';
import ContactPage from './Pages/ContactPage/ContactPage.js';
import HomePage from './Pages/HomePage/HomePage.js'
import ContactDetailsPage from './Pages/ContactDetailsPage/ContactDetailsPage.js';
import StatisticPage from './Pages/StatisticsPage/StatisticPage.js'
class App extends Component {
  render() {
    return (
      <div className="App container">
        <ContactPage/>
        <HomePage/>
        <ContactDetailsPage/>
        <StatisticPage/>
      </div>
    )
  }
}
export default App;
