import React from 'react';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        // Дефиниция за local state
        this.state = {
            title: "Hello",
        }
    }

    buttonOnClick = () => {
        this.setState({
            title: "Set new Title",
        });
    }

    render() {
        return <div>
            <h1>{this.state.title}</h1>
            <p>{this.props.description}</p>
            <button className="btn btn-primary" onClick={this.buttonOnClick}>Click me!</button>
        </div>
    }

}

export default Welcome;