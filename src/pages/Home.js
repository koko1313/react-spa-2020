import React from 'react';
import QuantityInput from '../components/QuantityInput';

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
            </div>
        </div>
    }

}

export default Home;