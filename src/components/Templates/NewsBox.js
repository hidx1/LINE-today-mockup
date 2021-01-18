import React from 'react';

import NewsLine from './Newsline';

class NewsBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { news, title, viewEnabled } = this.props;
    return (
      <React.Fragment>
        { news && news.length > 0 ?
        <div className="box-padding">
          <div className="heading margin-bottom-sm">{title}</div>
          {news.map( (newsItem,index) => (
            <NewsLine
              key={`newsline-${index}`}
              item={newsItem}
              viewEnabled={viewEnabled}
            />
          ))}
        </div>
        : null }
      </React.Fragment>
    );
  }
}

export default NewsBox;