import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

// ContextAPI, вместо redux 

class ApplicationContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Default title",
            counter: 1,
            movies: [],
        }
    }

    setTitle = (title) => this.setState({ title });

    render = () => {
        const value = {
            ...this.state,
            setState: this.setState,
        }
        return <Provider value={value}>
            {this.props.children}
        </Provider>
    }
}

export default {
    ApplicationContextProvider,
    ApplicationConsumer: Consumer,
}