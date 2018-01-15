import React from 'react';
import {render} from 'react-dom';
import Advice from './Advice.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <Advice />
  }
}

render(<App/>, document.getElementById('app'));
