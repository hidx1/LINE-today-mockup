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
    this.state = {
      currentCategory: 0,
      templates: [],
      test: null,
    }
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
    const { news, categories } = this.props;
    const { templates } = this.state;
    const { test } = this.state;
    // console.log(news);
    console.log(templates);

    return (
      <div>
        <div className="content-body">
          <Header/>
          <div className="main">
            <Categories currentCategory={this.setCurrentCategory}/>
            { templates.length > 0 ? 
              templates.map( (template,index) => (
                <div key={`template-${index}`}>
                  {console.log(template.sections.length)}
                  { template.sections[0].articles.length === 1 && 
                    template.sections[0].articles[0].source === "AD" ? console.log("AD")
                    : 
                    template.title ? (
                      <ArticlesBox>

                      </ArticlesBox>
                    )
                    :
                    template.sections.length > 1 ? (
                      <div>
                        <div className="carousel-container">
                          <Swiper
                            slidesPerView={1}
                            navigation
                            pagination={{
                              clickable: true,
                            }}
                            loop={true}
                            autoplay={{ delay: 3500}}
                            className="carousel-swiper"
                          >
                            {template.sections[0].articles.map( (article) => (
                              <SwiperSlide
                                className=""
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
                        <NewsBox
                          news = { template.sections[1].articles }
                        />
                      </div>
                    )
                    : 
                    (
                      <NewsBox
                        news = { template.sections[0].articles }
                      />
                    )
                  }
                </div>
              ))
            : null }
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