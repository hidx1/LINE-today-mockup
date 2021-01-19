import React from 'react';
import { getNewsAction } from '../../store/actions';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';

import ArticlesBox from '../../components/Templates/ArticlesBox';
import NewsBox from '../../components/Templates/NewsBox';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNews();
  }

  setCurrentCategory = (index) => {
    const { news } = this.props;
    if (news.length > 0) {
      let templates = news[index].templates;
      this.setState({ templates });
      this.setState({ test: templates[1].sections[0].articles[0]})
    }
  }

  render() {
    const { news, activeTab, error } = this.props;
    const newsBoxTemplate = [6, 50, 6301, 6302, 6303];
    const articleBoxTemplate = [59, 63, 6304];
    let templates = [];
    let carouselContent = [];
    if (news.length > 0) {
      templates = news[activeTab].templates;
      const contentIdx = templates.findIndex(x => x.type === 6);
      if (templates[contentIdx]) carouselContent = templates[contentIdx].sections[0].articles;
    }

    return (
      <div>
        <div className="content-body">
          <Header/>
          <div className="main">
            <Categories currentCategory={this.setCurrentCategory}/>
            
              { carouselContent.length > 0 ? (
                <div className="carousel-container">
                  <Swiper
                    slidesPerView={1}
                    navigation
                    loop={true}
                    autoplay={{ delay: 3500}}
                    className="carousel-swiper"
                  >
                    { carouselContent.map( (article, idx) => (
                      <SwiperSlide
                        key={`swiper-article-${idx}`}
                      >
                        <a
                          href={article.url.url}
                          className="carousel-img-container"
                        >
                          <img
                            className="carousel-img"
                            src={`https://obs.line-scdn.net/${article.thumbnail.hash}`}
                            alt={article.title}
                          />
                          
                          <div className="carousel-text text-big text-overflow-2-lines">
                            {article.title}
                          </div>
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : null }
            
            { templates.length > 0 ? 
              templates.map( (template,index) => (
                <div key={`template-${index}`}>
                  { 
                    newsBoxTemplate.includes(template.type) ?
                    (
                      <NewsBox
                        news = { template.sections[0].articles }
                        title = { template.title }
                        whiteBox = { template.type === 6301 }
                      />
                    )
                    :
                    articleBoxTemplate.includes(template.type) ?
                    (
                      <ArticlesBox
                        news = { template.sections[0].articles }
                        title = { template.title }
                        whiteBox = { template.type !== 6304 }
                      />
                    )
                    :
                    null
                  }
                </div>
              ))
            :
            error ? (
              <div className="center">
                <h1>NO DATA.<br/>USE CORS EXTENSION OR USE CORS ANYWHERE URL</h1>
              </div>
            ) : null }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    news: state.news,
    categories: state.categories,
    error: state.error,
    activeTab: state.activeTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getNews: () => {
      dispatch(getNewsAction());
    },
  };
}

const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomePage;