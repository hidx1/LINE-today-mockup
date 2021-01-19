import React from 'react';
import { connect } from 'react-redux';

import { updateTabAction } from '../../store/actions';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

class CategoryBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let urlTab = parseInt(urlParams.get("tab"));
    if (!isNaN(urlTab)) {
      this.props.updateTab(urlTab);
    } 
  }

  activateTab = (tabId) => {
    const arr = tabId.split('-');
    const newTab = parseInt(arr[arr.length-1]);
    this.props.updateTab(newTab);
  }

  render() {
    const { categories, activeTab } = this.props;
    
    return (
      <React.Fragment>
        <div className="categories-tab">
          { categories && categories.length > 0 ? (
            <Swiper
              slidesPerView={9}
              className="text-medium tab-swiper"
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
    activeTab: state.activeTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTab: (tabNum) => {
      dispatch(updateTabAction(tabNum));
    }
  }
}

const Categories = connect(mapStateToProps, mapDispatchToProps)(CategoryBar);

export default Categories;