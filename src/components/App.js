import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FrameDataApp from './FrameDataApp';

export default function App(props) {
  return (
    <Router>
      <Route exact path="/" component={FrameDataApp} />
    </Router>
  );
}