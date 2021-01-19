import React from 'react';
import { connect } from 'react-redux';

import { updateTabAction } from '../../store/actions';

import NewsLine from './Newsline';

class NewsWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories, news, title, whiteBox } = this.props;
    const trendingWords = 
    ["trending", "highlight", "viral", "dikomentari", "commented"];

    let viewEnabled = false;
    if (title) {
      let splittedTitle = title.split(' ');
      splittedTitle = splittedTitle.map(function(x){ return x.toLowerCase(); });
      viewEnabled = splittedTitle.some(word => trendingWords.indexOf(word) >= 0);
    }

    return (
      <React.Fragment>
        { news && news.length > 0 ?
        <div className="box-padding">
          <div className={`${whiteBox ? "white-box box-shadow" : ""}`}>
            <div 
              className={`heading margin-bottom-sm 
                ${whiteBox ? "cursor-pointer" : ""}`
              }
              onClick={ () =>
                this.props.updateTab(categories.findIndex(x => x.id === news[0].categoryId))
              }
            >
              { title ? 
                whiteBox ? title + " >" : title
              : null }
            </div>
            {news.map( (newsItem,index) => (
              <NewsLine
                key={`newsline-${index}`}
                item={newsItem}
                viewEnabled={viewEnabled}
              />
            ))}
          </div>
        </div>
        : null }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { 
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTab: (tabNum) => {
      dispatch(updateTabAction(tabNum));
    }
  };
}

const NewsBox = connect(mapStateToProps, mapDispatchToProps)(NewsWrapper);

export default NewsBox;