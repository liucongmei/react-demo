import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './themes/common.css'
// import './index.css';
import App from './App';
import IRouter from './router'
import User from './pages/User'
import { createStore } from 'redux' 
import { Provider, connect } from 'react-redux'
import {BrowserRouter} from "react-router-dom"

import reducer from './store/index.reducer'
import * as serviceWorker from './serviceWorker';

// export default class Hello extends Component{
//     render(){
//         return (
//             <Router>
//                 <div className='wrapper'>
//                     <Route exact path="/" component={Dashboard} />
//                     <Route exact path="/user" component={User} />
//                     <div className="nav">
//                         <div className="nav-box">
//                             <div className='item-nav'><Link to="/">首页</Link></div>
//                             <div className='item-nav'><Link to="/">圈子</Link></div>
//                             <div className='item-nav'><Link to="/user">我的</Link></div>
//                         </div>
//         　　 　　　　</div>                    
//                 </div>
//             </Router>
//         )
//     }
// }
//创建store
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// }from 'react-router-dom';
// import './index.css';
// import App from './components/App';  // 导入App组件
// import About from './components/About'; // 导入About组件
// import Inbox from './components/Inbox'; // 导入Inbox组件
// import registerServiceWorker from './registerServiceWorker';
 
// export default class Hello extends Component{
//     render(){
//         return (
//             <Router>
//                 <div>
//                     <ul className="nav">
//             　　　　　　<li><Link to="/">App</Link></li>
//             　　　　　　<li><Link to="/About">About</Link></li>
//             　　　　　　<li><Link to="/Inbox">Inbox</Link></li>
//         　　 　　　　</ul>
//                     <hr />
//                     <Route exact path="/" component={App} />
//                     <Route path="/About" component={About} />
//                     <Route path="/Inbox" component={Inbox} />
//                 </div>
//             </Router>
//         )
//     }
// }
// ReactDOM.render(<Hello />, document.getElementById('root'));
// registerServiceWorker();