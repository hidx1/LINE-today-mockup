import React from 'react';

import ArticlePiece from './ArticlePiece';

class ArticlesBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { news, title, whiteBox } = this.props;
    return (
      <React.Fragment>
        { news && news.length > 0 ? (
          <div className={`box-padding`}>
            <div className={`${whiteBox ? "white-box" : ""}`}>
              <div 
                className={`heading margin-bottom-sm 
                  ${whiteBox ? "cursor-pointer" : ""}`
                }
                // onClick={()}
              >
                { title }
              </div>
              <div className="article-grid-container">
                { news.map( (newsItem, index) => (
                  <ArticlePiece 
                    key={`articlepiece-${index}`}
                    item={newsItem}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null }
      </React.Fragment>
    )
  }
}

export default ArticlesBox;