import React from 'react';
import { connect } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.min.css';

class CategoryBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    }
  }

  componentDidMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let urlTab = parseInt(urlParams.get("tab"));
    if (!isNaN(urlTab)) {
      this.setState({activeTab: urlTab});
      this.props.currentCategory(urlTab);
    } else {
      this.props.currentCategory(0);
    }
  }

  activateTab = (tabId) => {
    const newTab = parseInt(tabId.charAt(tabId.length-1));
    this.setState({activeTab: newTab});
    window.history.replaceState(null, null, `?tab=${newTab}`);
    this.props.currentCategory(newTab);
  }

  render() {
    const { categories } = this.props;
    const { activeTab } = this.state;
    
    return (
      <React.Fragment>
        <div className="categories-tab">
          { categories && categories.length > 0 ? (
            <Swiper
              slidesPerView={9}
              className="text-medium tab-swiper"
              onSwiper={() => this.props.currentCategory(activeTab)}
            >
              { categories.map( (category, idx) => (
                <SwiperSlide
                  key={`slide-${idx}`}
                  id={`slide-${idx}`}
                  className={`tab-item width-auto margin-left-sm margin-right-sm ${idx === activeTab ? "selected" : "tab-grey"}`}
                  onClick={(e) => this.activateTab(e.target.id)}
                >
                  {category.name}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null }
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { 
    categories: state.categories,
    error: state.error,
  };
}

const Categories = connect(mapStateToProps, null)(CategoryBar);

export default Categories;