import React from 'react';

import NewsLine from './Newsline';

class NewsBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { news } = this.props;
    return (
      <React.Fragment>
        { news && news.length > 0 ?
        <div className="box-body box-padding">
          {news.map( (newsItem,index) => (
            <div key={`newsline-${index}`}>
              <NewsLine
                item={newsItem}
              />
            </div>
          ))}
        </div>
        : null }
      </React.Fragment>
    );
  }
}

export default NewsBox;