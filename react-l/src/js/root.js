import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import PCIndex from './components/pc-index';
import MobileIndex from './components/mobile-index';
import MediaQuery from 'react-responsive';
import PCNewsDetail from './components/pc-news-detail';
import MobileNewsDetail from './components/mobile-news-detail';

import 'antd/dist/antd.css';

export default class Root extends React.Component{
  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Router history={hashHistory}>
            <Route path="/" component={PCIndex}/>
            <Route path="/detail/:uniquekey" component={PCNewsDetail}/>
          </Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <Router history={hashHistory}>
            <Route path="/" component={MobileIndex}/>
            <Route path="/detail/:uniquekey" component={MobileNewsDetail}/>
          </Router>
        </MediaQuery>
      </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('MainContainer'));
