import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "./actions";

class Home extends React.Component {
  componentDidMount () {
    this.props.requestApiData();
  }

  movie = (x, i) =>
  <div key = { x.id } className='image-container d-flex justify-content-start m-3'>
    <img src= {`https://image.tmdb.org/t/p/w500/${x.poster_path}`} alt='movie'></img>
  </div>;

  render() {
    const { results = [] } = this.props.data;
    return results.length ? (
      <h1> { results.map(this.movie) } </h1>
    ) : <h1>Loading...</h1>
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
