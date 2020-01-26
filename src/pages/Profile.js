import React from 'react';

import { connect } from 'react-redux';

class Profile extends React.Component {

    render() {
        return <div>
            <h1>Profile Page</h1>
            <p>Global count: {this.props.counter}</p>
        </div>
    }

}

// направо си подаваме функцията вътре (анонимна функция), вместо да я пишем отвън
export default connect(state => ({ counter: state.counter }))(Profile);