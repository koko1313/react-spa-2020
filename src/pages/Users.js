import React from 'react';
import { connect } from 'react-redux';

class Users extends React.Component {

    constructor(props) {
        super(props);

        console.log(props.movies);
    }

    componentDidMount = () => {
        this.props.getMovies();
    }

    renderMovies = () => {
        const moviesItems = this.props.movies.map((movie) => {
            return <li key={movie.id} className="list-group-item">
                <h3>{movie.title}</h3>
                <p>{movie.releaseYear}</p>
            </li>
        });
        return moviesItems;
    }

    render() {
        return <>
            <div>
                <h1>{this.props.title}</h1>

                <ul className="list-group">
                    {this.renderMovies()}
                </ul>

                <small>Global count: {this.props.counter}</small>
            </div>
        </>
    }

}

function getGlobalMovies() {
    return dispatch => {
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch({
                type: "FETCHED_MOVIES",
                payload: responseJson.movies,
            });
        })
        .catch((error) => {
        console.error(error);
        });
    }
}

const mapStateToProps = state => ({ movies: state.movies, counter: state.counter, title: state.title })

const mapStateToDispatch = dispatch => {
    return {
        getMovies: () => dispatch(getGlobalMovies())
    }
};

export default connect(mapStateToProps, mapStateToDispatch)(Users);