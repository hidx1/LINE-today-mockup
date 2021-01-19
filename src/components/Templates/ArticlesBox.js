import React from 'react';
import { connect } from 'react-redux';

import { updateTabAction } from '../../store/actions';

import ArticlePiece from './ArticlePiece';

class ArticlesWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories, news, title, whiteBox } = this.props;
    return (
      <React.Fragment>
        { news && news.length > 0 ? (
          <div className={`box-padding`}>
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
              <div className="article-grid-container">
                { news.map( (newsItem, index) => (
                  <ArticlePiece 
                    key={`articlepiece-${index}`}
                    item={newsItem}
                  />
                ))}
              </div>
              { whiteBox ? (
                <div className="box-footer">
                  <div
                    className="box-footer-text cursor-pointer text-small-thin"
                    onClick={ () =>
                      this.props.updateTab(categories.findIndex(x => x.id === news[0].categoryId))
                    }
                  >
                    Lihat lainnya &gt;
                  </div>
                </div>
              ) : null }
            </div>
          </div>
        ) : null }
      </React.Fragment>
    )
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

const ArticlesBox = connect(mapStateToProps, mapDispatchToProps)(ArticlesWrapper);

export default ArticlesBox;