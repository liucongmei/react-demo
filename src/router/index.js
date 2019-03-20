// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// const router
// export default router 
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,  } from 'react-router-dom'
// import { IndexRoute } from 'react-router'
import Main from '../pages/Main'
import Dashboard from '../pages/Dashboard'
import User from '../pages/User'

export default class IRouter extends React.Component{

    render(){
        return (
            <Router>
              <div>
                <Route path="/"    component={Main}>
                </Route>
                <Route path="/"   exact  component={Dashboard}>
                </Route>
                <Route path="/user" exact component={User}></Route>
              </div> 
                    
            </Router>
        );
    }
}