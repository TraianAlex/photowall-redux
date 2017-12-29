import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PhotoWall from '../Components/PhotoWall'
import Single from '../Components/Single'
import { Route,Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="font-face">
          <Link to="/">Photowall</Link>
        </h1>
        <Switch>
        <Route exact path='/' render={() => (<PhotoWall someProp={this.props}/>)}/>
        <Route path='/single/:singleID' render={() => (<Single someProp={this.props}/>)}/>
        </Switch>
      </div>

    );
  }
}

export default Main;
