import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PhotoWall from '../Components/PhotoWall'
import Single from '../Components/Single'
import { Route,Switch,BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'


class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="font-face">
          <Link to="/">Photowall</Link>
        </h1>
        <Switch>
        <Route exact path='/' render={(params) => (<PhotoWall {...this.params}{...props}/>)}/>
        <Route       path='/single/:id' render={(params) => (<Single {...this.params}{...props}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
