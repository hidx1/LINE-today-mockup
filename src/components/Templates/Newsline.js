import React from 'react';

import VisibilityIcon from '@material-ui/icons/Visibility';

class NewsLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, viewEnabled } = this.props;
    return (
      <React.Fragment>
        <a
          href={item && item.url ? item.url.url : null}
          className="newsline-container"
        >
          <div className="newsline-img-container">
            { item && item.thumbnail ? (
              <img
                className="newsline-img"
                src={
                  item.thumbnail.type === "IMAGE" ?
                    `https://obs.line-scdn.net/${item.thumbnail.hash}`
                  : `https://obs.line-scdn.net/${item.thumbnail.hash}/w644`
                }
              />
            ) : null }
          </div>
          <div className="padding-left-md text-overflow-3-lines">
            <div className="text-medium text-overflow-3-lines">{item && item.title ? item.title : ''}</div>
            <div className="subtitle tab-grey display-flex">
              <div>{item && item.publisher ? item.publisher : ''}</div>
              {viewEnabled ? (
                <div className="display-flex padding-left-xxs">
                  <VisibilityIcon fontSize="small"/>
                  <div className="padding-left-xxs">{item.viewCount}</div>
                </div>
              ) : null}
            </div>
          </div>
        </a>
      </React.Fragment>
    );
  }
}

export default NewsLine;