import React from 'react';

class Header extends React.Component {
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
              onClick={() => location.assign('localhost:8080')}
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

export default Header;