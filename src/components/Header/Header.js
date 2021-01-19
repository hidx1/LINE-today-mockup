import React from 'react';
import { connect } from 'react-redux';

import { updateTabAction } from '../../store/actions';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="header-content padding-bottom-0">
          <div className="header-bar">
            <button
              className="titlebar-btn"
              onClick={() => this.props.updateTab(0)}
            >
              <img 
                src="https://static-today.line-scdn.net/dist/59120d06/static/img/brand-logo-rectangle-today-solid.svg"
                alt="LINE TODAY"
              />
            </button>
            <button 
              className="padding-left-xxs padding-right-xxs"
              onClick={() => location.assign('https://line.me/en/')}
            >
              <span className="text-small">Masuk</span>
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTab: (tabNum) => {
      dispatch(updateTabAction(tabNum));
    }
  };
}

const Header = connect(null, mapDispatchToProps)(HeaderBar);

export default Header;