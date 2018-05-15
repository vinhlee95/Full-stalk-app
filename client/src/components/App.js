import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Header from './Header';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';

const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>New Survey</h2>;

const style = {
  margin: '0 auto',
  width: '70%'
}

class App extends Component {

  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App" style={style} >
        <BrowserRouter>
          <div>
            <Header />                      
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
