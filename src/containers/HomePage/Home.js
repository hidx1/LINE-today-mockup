import React from 'react';
import { getNewsAction } from '../../store/actions';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { news, categories } = this.props;
    console.log(news);
    console.log(categories);
    return (
      <div>
        <div className="content-body">
          <Header/>
          <div className="main">
            <Categories/>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            <div>halo</div>
            
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