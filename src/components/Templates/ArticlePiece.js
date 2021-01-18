import React from 'react';

class ArticlePiece extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <React.Fragment>
        <a
          href={item && item.url ? item.url.url : null}
          className="article-container"
        >
          <div className="article-img-container">
            { item && item.thumbnail ? (
              <img
                className="article-img"
                src={
                  item.thumbnail.type === "IMAGE" ?
                    `https://obs.line-scdn.net/${item.thumbnail.hash}`
                  : `https://obs.line-scdn.net/${item.thumbnail.hash}/w644`
                }
              />
            ) : null }
          </div>
          <div className="margin-top-xs">
            <div className="text-medium text-overflow-3-lines">{item && item.title ? item.title : ''}</div>
            <div className="subtitle tab-grey">{item && item.publisher ? item.publisher : ''}</div>
          </div>
        </a>
      </React.Fragment>
    )
  }
}

export default ArticlePiece;