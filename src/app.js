import React from 'react';

import GlobalStyle from './global-styles';
import HomePage from './containers/HomePage/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage/>
        <GlobalStyle/>
      </div>
    );
  }
}

export default App;