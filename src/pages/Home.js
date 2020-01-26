import React from 'react';
import QuantityInput from '../components/QuantityInput';

//redux
import { connect } from 'react-redux';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counts: [1, 2, 3, 4, 5],
            elements: [
                {
                    title: "Title 1",
                    text: "Random text 1",
                },
                {
                    title: "Title 2",
                    text: "Random text 2",
                },
            ],
        }

        console.log(this.props.counter);
        console.log(this.props.setCounter)
    }

    getQuantityInputs = () => {
        const counts = this.state.counts;

        const inputs = counts.map((element) => {
            return <QuantityInput key={element} count={element} />
        });

        return inputs;
    }

    changeCounts = () => {
        this.setState({
            counts: [7, 2],
        });
    }

    getListItems = () => {
        const inputs = this.state.elements.map((item, index) => {
            return (
                <li key={index} className="list-group-item">
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </li>
            );
        });

        return inputs;
    }

    changeGlobalCount =() => {
        this.props.setCounter(10);
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md">
                    <h1>Home Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={this.changeCounts}>Change counts</button>
                    {this.getQuantityInputs()}
                </div>
                <div className="col-md">
                    <ul className="list-group">
                        {this.getListItems()}
                    </ul>
                </div>
                <div className="col-md">
                    <ul className="list-group">
                        <button className="btn btn-danger" onClick={this.changeGlobalCount}>Change global count</button>
                    </ul>
                </div>
            </div>
        </div>
    }

}


const setActionCount = (count) => {
    return {
        type: "INCREMENT_COUNT",
        payload: count,
    };
}


// функция, даваща ни достъп до целия state на нашия App
const mapStateToProps = (state) => {
    return {
        counter: state.counter, // state.counter - това е функцията от redux/index
    };
}

// тази функция закачва функция setCounter към props
const mapStateToDispatch = (dispatch) => {
    return {
        setCounter: count => dispatch(setActionCount(count)), // lambda expression функция, все едно setCounter(count) { dispatch... }
    };
}

// connect(null, null) - приема 2 функции и връща функция, която приема компонент (нашия компонент - Home)
export default connect(mapStateToProps, mapStateToDispatch)(Home);




// пример за функция, която връща функция
// const x = function(y) {
//     return function(z) {
//         return y + z;
//     }
// }

// const res = x(3);
// res(4); // 7

// // или
// const res = x(3)(4);