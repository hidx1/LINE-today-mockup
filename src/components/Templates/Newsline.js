import React from 'react';

class NewsLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    if (item && item.thumbnail) console.log(item.thumbnail.hash)
    
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
                src={`https://obs.line-scdn.net/${item.thumbnail.hash}`}
              />
            ) : null }
          </div>
          <div className="padding-left-md text-overflow-3-lines">
            <div className="text-medium text-overflow-3-lines">{item && item.title ? item.title : ''}</div>
            <div className="subtitle tab-grey">{item && item.publisher ? item.publisher : ''}</div>
          </div>
        </a>
      </React.Fragment>
    );
  }
}

export default NewsLine;