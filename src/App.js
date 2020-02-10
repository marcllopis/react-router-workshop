import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';


class App extends Component {
  state = {
    home: {
      title: 'Home component',
      subtitle: 'Some home extra stuff'
    },
    about: {
      title: 'About component',
      subtitle: 'Some about extra stuff'
    },
    contact: {
      title: 'Contact component',
      subtitle: 'Some contact extra stuff'
    }
  }

  render() {
    return (
      <div>
        <Switch>
          {/* That's the most efficient way, using render you are only returning the component you want to be rendered in that route. With {...props} you spread all the props that come from the parent to the new rendered component and you add the extra props you need after */}
          <Route
            exact path="/"
            render={props => <Home {...props} homeContent={this.state.home} />}
          />
          {/* Not good. Even though you are able to render a component and pass him the props you want, you have no way to pass him the router props like we did before */}
          <Route path="/about">
            <About aboutContent={this.state.about} />
          </Route>
          {/* Not good either, you are able to pass the router props with the spread and also your own props, but you are creating a component every time, it's better to just render it like we do on the 1st method */}
          <Route
            path="/contact"
            component={props => <Contact {...props} contactContent={this.state.contact}/>}
          />

        </Switch>
      </div>
    );
  }
}

export default App;
